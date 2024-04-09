

const db = require("../config/config")
const {logError} = require("../config/helper")
const getList = async (req,res) => {
    try{
        const [list] = await db.query("SELECT * FROM role")
        res.json({
            list: list
        })
    }catch(err){
        logError("role.getList",err)
        res.status(500).send('Internal Server Error');
    }
}


const create = async (req,res)=>{
    try{
        var sql = "INSERT INTO role (Name, Code, Status) VALUES (:Name,:Code,:Status)";
        var param = {
            Name:req.body.Name, // get param from client
            Code:req.body.Code,
            Status:req.body.Status
        }
        sql += " ORDER BY Id DESC"
        const [data] = await db.query(sql,param);
        res.json({
            data:data
        })
    }catch(err){
        logError("role.create",err,res)
    
    }
}

const update = async (req,res) => {
    try{
        var sql = " UPDATE role SET Name=:Name, Code=:Code, Status=:Status WHERE Id =:Id"
        var param = {
            Id : req.body.Id,
            Name : req.body.Name,
            Code : req.body.Code,
            Status : req.body.Status,
        }
        const [data] = await db.query(sql,param);
        res.json({
            message: (data.affectedRows != 0 ? "Update success" : "Not found"),
            data:data
        })
    }catch(err){
        logError("role.update",err,res)
    }
}

const remove = async (req,res)=>{
    try{
            var sql = "DELETE FROM role WHERE Id = :Id"
            var param = {
                Id : req.body.Id
            }
            const [data] = await db.query(sql,param);
            res.json({
                message: data.affectedRows != 0 ? "Remove success" : "Not found",
                data:data
            })
    }catch(err){
        logError("role.remove",err,res)
    }
}

module.exports = {
    getList,
    create,
    update,
    remove
}