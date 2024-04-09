
const db = require("../config/config")
const { logError,isEmptyOrNull } = require("../config/helper")
const bcrypt = require("bcrypt")

const getList = async (req, res) => {
    try {
        var {
            txt_search,
            status,
        } = req.query

       
        var sql = "SELECT e.*, r.Name as RoleName FROM employee e "+
        "INNER JOIN Role r ON e.RoleId = r.Id WHERE 1=1" 


        var param = {}
        if(!isEmptyOrNull(txt_search)){
            sql += " AND (e.Firstname LIKE :txt_search OR e.Lastname LIKE :txt_search) "
            param["txt_search"] = "%"+txt_search+"%"
        }
        if(!isEmptyOrNull(status)){
            sql += " AND e.Status = :status"
            param["status"] = status
        }

        const [list] = await db.query(sql,param)
        const [role] = await db.query("SELECT * FROM role")
        
        res.json({
            message: 'This is listing route.',
            list : list,
            role : role
        })
    } catch (err) {
        logError("employee.getList", err, res)
    }
}

const getOne = async (req, res) => {
    try {
        const sql = "SELECT * FROM employee WHERE Id = :Id"
        const param = {
            Id: req.body.Id
        }
        const [list] = await db.query(sql, param)
        res.json({
            message: 'This is get one route.',
            data: Object.assign(...list)
        })
    } catch (err) {
        logError("employee.getOne", err, res)
    }
}

const create = async (req, res) => {
    try {
        var sql = `INSERT INTO employee
            (RoleId, Firstname, Lastname, Gender, Dob, Tel, Email, Address, Status, Image, Salary)
            VALUES (:RoleId, :Firstname, :Lastname,:Gender, :Dob, :Tel, :Email, :Address, :Status, :Image, :Salary)`;
        var param = {
            RoleId :req.body.RoleId,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Gender: req.body.Gender,
            Dob: req.body.Dob,
            Tel: req.body.Tel,
            Email: req.body.Email,
            Address: req.body.Address,
            Status: req.body.Status,
            Image: req.body.Image,
            Salary: req.body.Salary
        }
        const [data] = await db.query(sql, param);
        res.json({
            message: 'Create successfully',
            data
        })
    } catch (err) {
        logError("employee.create", err, res)
    }
}

const setPassword = async (req,res) =>{

try {
    var {
        Tel,
        Password,
        ConfirmPassword
    } = req.body;

    // Check Tel is exist ?
    const [user] = await db.query("SELECT * FROM employee WHERE Tel=:Tel",{Tel:Tel});
    if(user.length == 0){
        res.json({
            error : true,
            message : "User doesn't exist!"
        })
        return false;
    } else if(Password != ConfirmPassword){// check Password and ConfirmPassword
        res.json({
            error : true,
            message : "Password and confirm password not match!"
        })
        return false
    }
    // set Password after hash to db
    const passHash = await bcrypt.hashSync(Password,10); // hash Password => 123456 => #@%*%#$&^$VIRTFRT EIG*%^(&)
    const [data] = await db.query("UPDATE employee SET Password=:Password WHERE Tel = :Tel",{Password:passHash,Tel:Tel});
    res.json({
        message : data.affectedRows ? "Password set successfully" : "Somthing wrong!"
    })

} catch (err) {
    logError("employee.setPassword", err, res)
}

}


const login = async (req,res) =>{
    try {
        var {
            Username,
            Password
        } = req.body
        const [user] = await db.query("SELECT * FROM employee WHERE Tel=:Tel",{Tel:Username})
        if(user.length == 0){
            res.json({
                error:true,
                message : "User doesn't exist!"
            })
            return false;
        }
        var passwordFromDb = user[0].Password; // 43r84753@$#%$54854395845rriguig
        var isCorrectPassword = await bcrypt.compareSync(Password,passwordFromDb);
        if(isCorrectPassword){
            delete user[0].Password; // remove column password

            res.json({
                message : "Login success!",
                user : user[0]
            })
        }else{
            res.json({
                message : "Inccectt Password!",
                error : true
            })
        }
    } catch(err) {
        logError("employee.login", err, res)
    }
}

const update = async (req, res) => {
    try {
        var sql =`UPDATE employee SET
            Firstname = :Firstname, Lastname = :Lastname, Gender = :Gender, Dob = :Dob, Tel = :Tel, Email = :Email, Address = :Address, Status = :Status
            WHERE Id = :Id`;
        var param = {
            Id: req.body.Id,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Gender: req.body.Gender,
            Dob: req.body.Dob,
            Tel: req.body.Tel,
            Email: req.body.Email,
            Address: req.body.Address,
            Status: req.body.Status
        }
        const [data] = await db.query(sql, param);
        res.json({
            message: (data.affectedRows != 0 ? "Update successfully" : "Not found"),
            data
        })
    } catch (err) {
        logError("employee.update", err, res)
    }
}

const remove = async (req, res) => {
    try {
        var sql = "DELETE FROM employee WHERE Id = :Id"
        var param = {
            Id: req.body.Id
        }
        const [data] = await db.query(sql, param);
        res.json({
            message: data.affectedRows != 0 ? "Delete successfully" : "Not found",
            data
        })
    } catch (err) {
        logError("employee.remove", err, res)
    }
}

module.exports = {
    getList,
    getOne,
    create,
    update,
    remove,
    setPassword,
    login
}