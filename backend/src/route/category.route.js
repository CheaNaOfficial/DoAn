const cat = require("../controller/category.controller")

const category = (app) =>{
    app.get("/api/category/getlist",cat.getList)
    app.get("/api/category/getOne",cat.getOne)
    app.post("/api/category/create",cat.create)
    app.put("/api/category/update",cat.update)
    app.delete("/api/category/delete",cat.remove)
}
module.exports = category;