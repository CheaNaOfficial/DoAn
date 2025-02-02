const db = require("../config/config") 
const {logError, isEmptyOrNull} = require("../config/helper");

const getList = async (req,res) => {
    try{
        var {
            txt_search,
            status,
        } = req.query

        var sql = " SELECT * FROM order_payment_method WHERE 1=1 "
        var param = {}
        if(!isEmptyOrNull(txt_search)){
            sql += " AND (Name LIKE :txt_search OR Code LIKE :txt_search) "
            param["txt_search"] = "%"+txt_search+"%"
        }
        if(!isEmptyOrNull(status)){
            sql += " AND Status = :status"
            param["status"] = status
        }
        sql += " ORDER BY Id DESC"
        const [list] = await db.query(sql,param)
        res.json({
            list: list
        })
    }catch(err){
        logError("order_payment_method.getList",err,res)
    }
}

const create = async (req,res)=>{
    try{
        var sql = "INSERT INTO order_payment_method (Name, Code, Status,CreateBy) VALUES (:Name,:Code,:Status,:CreateBy)";
        var param = {
            Name:req.body.Name,
            Code:req.body.Code,
            Status:req.body.Status,
            CreateBy:req.body.UserId
        }
        const [data] = await db.query(sql,param);
        res.json({
            data:data,
            message : data.affectedRows ? "Insert success" : "Something wrong"
        })
    }catch(err){
        logError("order_payment_method.create",err,res)
    }
}

const update = async (req,res) => {
    try{
        var sql = " UPDATE order_payment_method SET Name=:Name, Code=:Code, Status=:Status, CreateBy=:CreateBy WHERE Id =:Id"
        var param = {
            Id : req.body.Id,
            Name : req.body.Name,
            Code : req.body.Code,
            Status : req.body.Status,
            CreateBy : req.body.UserId,
        }
        const [data] = await db.query(sql,param);
        res.json({
            message: (data.affectedRows != 0 ? "Update success" : "Not found"),
            data:data
        })
    }catch(err){
        logError("order_payment_method.update",err,res)
    }
}

const remove = async (req,res)=>{
    try{
            var sql = "DELETE FROM order_payment_method WHERE Id = :Id"
            var param = {
                Id : req.body.Id
            }
            const [data] = await db.query(sql,param);
            res.json({
                message: data.affectedRows != 0 ? "Remove success" : "Not found",
                data:data
            })
    }catch(err){
        logError("order_payment_method.remove",err,res)
    }
}
module.exports = {getList, create, update, remove}