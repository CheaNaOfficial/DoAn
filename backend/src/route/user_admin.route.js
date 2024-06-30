const adm = require("../controller/user_admin.controller")

const user_admin = (app) =>{
    app.get("/api/user_admin/getlist",adm.getList)
    app.get("/api/user_admin/getOne",adm.getOne)
    app.post("/api/user_admin/create",adm.create)
    app.post("/api/user_admin/setPassword",adm.setPassword)
    app.post("/api/user_admin/login",adm.login)
    app.put("/api/user_admin/update",adm.update)
    app.delete("/api/user_admin/delete",adm.remove)
}
module.exports = user_admin;