

const prod = require("../controller/product.controller")
const {upload} = require("../config/helper")

const product = (app) =>{
    app.get("/api/product/getlist",prod.getList)
    // app.get("/api/product/getOne",prod.getOne)
    app.post("/api/product/create",upload.single("Image"),prod.create)
    app.put("/api/product/update",upload.single("Image"),prod.update)
    app.delete("/api/product/delete",prod.remove)
}
module.exports = product;