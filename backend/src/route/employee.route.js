const emp = require("../controller/employee.controller")

const employee = (app) =>{
    app.get("/api/employee/getlist",emp.getList)
    app.get("/api/employee/getOne",emp.getOne)
    app.post("/api/employee/create",emp.create)
    app.post("/api/employee/setPassword",emp.setPassword)
    app.post("/api/employee/login",emp.login)

    app.put("/api/employee/update",emp.update)
    app.delete("/api/employee/delete",emp.remove)
}
module.exports = employee;