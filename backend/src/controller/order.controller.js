// const db = require("../config/config") 
// const {logError, isEmptyOrNull} = require("../config/helper");

// const getList = async (req,res) => {
//     try{
//         var {
//             txt_search,
//             status,
//         } = req.query
//         var sql = " SELECT * order WHERE 1=1 "
//         var param = {}
//         if(!isEmptyOrNull(txt_search)){
//             sql += " AND (Name LIKE :txt_search OR Code LIKE :txt_search) "
//             param["txt_search"] = "%"+txt_search+"%"
//         }
//         if(!isEmptyOrNull(status)){
//             sql += " AND Status = :status"
//             param["status"] = status
//         }
//         sql += " ORDER BY Id DESC"
//         const [list] = await db.query(sql,param)
//         res.json({
//             list: list
//         })
//     }catch(err){
//         logError("order.getList",err,res)
//     }
// }


// module.exports = {getList}


const db = require("../config/config") 
const {logError, isEmptyOrNull} = require("../config/helper");

const getList = async (req, res) => {
    try {
        const { txt_search, status } = req.query;

        let sql = "SELECT * FROM `order` WHERE 1=1 ";
        const param = {};

        if (!isEmptyOrNull(txt_search)) {
            sql += " AND (Name LIKE :txt_search OR Code LIKE :txt_search) ";
            param["txt_search"] = `%${txt_search}%`;
        }

        if (!isEmptyOrNull(status)) {
            sql += " AND Status = :status";
            param["status"] = status;
        }

        sql += " ORDER BY Id DESC";

        const [list] = await db.query(sql, param);

        res.json({
            list: list,
        });
    } catch (err) {
        logError("order.getList", err, res);
    }
};
const create = async (req,res)=>{
    try{
        var sql = "INSERT INTO order (user_id,paymentype, user_id,total_amount) VALUES (:user_id,:paymentype,:total_amount)";
        var param = {
            user_id:req.body.user_id,
            paymentype:req.body.paymentype,
            total_amount:req.body.total_amount,
        }
        const [data] = await db.query(sql,param);
        res.json({
            data:data,
            message : data.affectedRows ? "Insert success" : "Something wrong"
        })
    }catch(err){
        logError("order.create",err,res)
    }
}

const update = async (req,res) => {
    try{
        var sql = " UPDATE order SET user_id=:user_id, paymentype=:paymentype, total_amount=:total_amount WHERE id=:id"
        var param = {
            id : req.body.id,
            user_id:req.body.user_id,
            paymentype:req.body.paymentype,
            total_amount:req.body.total_amount,
        }
        const [data] = await db.query(sql,param);
        res.json({
            message: (data.affectedRows != 0 ? "Update success" : "Not found"),
            data:data
        })
    }catch(err){
        logError("order.update",err,res)
    }
}

const remove = async (req,res)=>{
    try{
            var sql = "DELETE FROM order WHERE id = :id"
            var param = {
                id : req.body.id
            }
            const [data] = await db.query(sql,param);
            res.json({
                message: data.affectedRows != 0 ? "Remove success" : "Not found",
                data:data
            })
    }catch(err){
        logError("order.remove",err,res)
    }
}
module.exports = {getList, create, update, remove}












// import db from "../config/config"; 
// import { logError, isEmptyOrNull } from "../config/helper";

// const getList = async (req, res) => {
//     try {
//         const { txt_search, status } = req.query;

//         let sql = "SELECT * FROM `order` WHERE 1=1 ";
//         const param = {};

//         if (!isEmptyOrNull(txt_search)) {
//             sql += " AND (Name LIKE :txt_search OR Code LIKE :txt_search) ";
//             param["txt_search"] = `%${txt_search}%`;
//         }

//         if (!isEmptyOrNull(status)) {
//             sql += " AND Status = :status";
//             param["status"] = status;
//         }

//         sql += " ORDER BY Id DESC";

//         const [list] = await db.query(sql, param);

//         res.json({
//             list: list,
//         });
//     } catch (err) {
//         logError("order.getList", err, res);
//     }
// };

// export default getList;