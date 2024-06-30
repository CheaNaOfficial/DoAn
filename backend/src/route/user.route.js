const emp = require("../controller/user.controller")

const user = (app) =>{
    app.get("/api/user/getlist",emp.getList)
    app.get("/api/user/getOne",emp.getOne)
    app.post("/api/user/create",emp.create)
    app.post("/api/user/setPassword",emp.setPassword)
    app.post("/api/user/login",emp.login)
    app.put("/api/user/update",emp.update)
    app.delete("/api/user/delete",emp.remove)
}
module.exports = user;