
const db = require("../config/config")
const { logError,isEmptyOrNull } = require("../config/helper")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const getList = async (req, res) => {
    try {
        var {
            txt_search,
            status,
        } = req.query

       
        var sql = "SELECT e.*, r.Name as RoleName FROM admin e "+
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
        logError("admin.getList", err, res)
    }
}

const getOne = async (req, res) => {
    try {
        const sql = "SELECT * FROM admin WHERE Id = :Id"
        const param = {
            Id: req.body.Id
        }
        const [list] = await db.query(sql, param)
        res.json({
            message: 'This is get one route.',
            data: Object.assign(...list)
        })
    } catch (err) {
        logError("admin.getOne", err, res)
    }
}

const create = async (req, res) => {
    try {
        var sql = `INSERT INTO admin
            (RoleId, Firstname, Lastname, Gender, Dob, Tel, Password,Email, Address, Status, Image, Salary)
            VALUES (:RoleId, :Firstname, :Lastname,:Gender, :Dob, :Tel,:Password, :Email, :Address, :Status, :Image, :Salary)`;
        const passHash = await bcrypt.hashSync(req.body.Password,10);
        var param = {
            RoleId :23,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Gender: req.body.Gender,
            Dob: req.body.Dob,
            Tel: req.body.Tel,
            Password: passHash,
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
        logError("admin.create", err, res)
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
    const [user] = await db.query("SELECT * FROM admin WHERE Tel=:Tel",{Tel:Tel});
    if(user.length == 0){
        res.json({
            error : true,
            message : "admin doesn't exist!"
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
    const [data] = await db.query("UPDATE admin SET Password=:Password WHERE Tel = :Tel",{Password:passHash,Tel:Tel});
    res.json({
        message : data.affectedRows ? "Password set successfully" : "Somthing wrong!"
    })

} catch (err) {
    logError("admin.setPassword", err, res)
}

}


const login = async (req, res) => {
    try {
      const { Username, Password } = req.body;
  
      // Assuming Username is the login credential
      const [user] = await db.query("SELECT * FROM admin WHERE Tel=:Tel", {Tel:Username });
  
      if (user.length === 0) {
        return res.json({
          error: true,
          message: "admin doesn't exist!"
        });
      }
  
      const isCorrectPassword = await bcrypt.compare(Password, user[0].Password);
  
      if (isCorrectPassword) {
        delete user[0].Password; // Remove password from response
        // JOIN example to retrieve role (assuming related tables)
        const [role] = await db.query("SELECT Name FROM role WHERE Id=?", [user[0].RoleId]);
        // Generate JWT with user info and role
        const token = jwt.sign({ userId: user[0].Id, role: role[0].Name }, '12345', { expiresIn: '3d' });
  
        res.json({
          message: "Login success!",
          user: user[0],
          token: token
        });
      } else {
        res.json({
          message: "Incorrect Password!",
          error: true
        });
      }
    } catch (err) {
      console.error("Error during login:", err);
      // Implement more robust error handling and logging
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

const update = async (req, res) => {
    try {
        var sql =`UPDATE admin SET
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
        logError("admin.update", err, res)
    }
}

const remove = async (req, res) => {
    try {
        var sql = "DELETE FROM admin WHERE Id = :Id"
        var param = {
            Id: req.body.Id
        }
        const [data] = await db.query(sql, param);
        res.json({
            message: data.affectedRows != 0 ? "Delete successfully" : "Not found",
            data
        })
    } catch (err) {
        logError("admin.remove", err, res)
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