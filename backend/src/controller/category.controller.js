
const db = require("../config/config")
const { isEmptyOrNull } = require("../config/helper")

const getList = async (req,res) => {
    try{
        var {
            txt_search,
            status
        } = req.query;
        var param = {}
        var sql = " SELECT * FROM category WHERE 1=1 "
        if(!isEmptyOrNull(txt_search)){
            sql+=" AND (Name LIKE :txt_search OR Description LIKE :txt_search) "
            param["txt_search"] = "%"+txt_search+"%"
        }
        if(!isEmptyOrNull(status)){
            sql += " AND status =:status"
            param["status"] = status
        }
        sql += " ORDER BY Id DESC"
        const [list] = await db.query(sql,param);
        res.json({
            list
        })
    }catch(err){
        logError("category.getList",err,res)
    }
}


const getOne = async (req,res) =>{
    try{
        var sql = "SELECT * FROM category WHERE Id=:Id"
        var param = {
            Id : req.body.Id
        }
        const [list] = await db.query(sql,param);
        res.json({
            list:list
        })
    }catch(err){
        logError("category.getList",err,res)
    }
}

const create = async (req,res) => {
    let con = await db.getConnection();
    try{
        await con.beginTransaction();
        var sql = "INSERT INTO category (Name,Description,Status) VALUES (:Name,:Description,:Status)"
        var param = {
            Name : req.body.Name,
            Description: req.body.Description,
            Status : req.body.Status,
        }
        const [data] = await con.query(sql,param);
        await con.commit()
        res.json({
            message:"Insert success",
            data:data
        })
    }catch(err){
        await con.rollback();
        logError("category.create",err,res)
    }
}
const update = async (req,res) =>{
    try{
        var sql ="UPDATE category SET Name=:Name,Description=:Description,Status=:Status WHERE Id=:Id"
        var param = {
            Id : req.body.Id,
            Name : req.body.Name,
            Description : req.body.Description,
            Status : req.body.Status
        } 
        const [data] = await db.query(sql,param);
        res.json({
            message:data.affectedRows != 0 ? "update success!" :"something wrong!",
            data:data
        })
    }catch(err){
        logError("category.update",err,res)
    }
}
const remove = async (req,res) =>{
    try{
        var sql ="DELETE FROM category WHERE Id=:Id"
        var param = {
            Id : req.body.Id
        } 
        const [data] = await db.query(sql,param);
        res.json({
            message:data.affectedRows != 0 ? "delete success!" :"something wrong!",
            data:data
        })
    }catch(err){
        logError("category.remove",err,res)
    }
}

module.exports = {
    getList,
    getOne,
    create,
    update,
    remove
}