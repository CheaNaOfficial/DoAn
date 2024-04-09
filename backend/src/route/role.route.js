
const rol = require("../controller/role.controller")

const role = (app) =>{
    app.get("/api/role/getlist",rol.getList)
    app.post("/api/role/create",rol.create)
    app.put("/api/role/update",rol.update)
    app.delete("/api/role/delete",rol.remove)
}
module.exports = role;