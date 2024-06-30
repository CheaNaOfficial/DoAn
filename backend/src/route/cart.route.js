




const cart = require("../controller/cart.controller")
const {upload} = require("../config/helper")
const checkRole = require("../middleware/checkRole")

const product = (app) =>{
    app.get("/api/cart/getlist",cart.getList)
    app.get("/api/cart/number",checkRole("IT"),cart.getNumberCart)
    // app.get("/api/product/getOne",prod.getOne)
    app.post("/api/cart/create",checkRole(["IT"]),cart.create)
    // app.put("/api/product/update",upload.single("Image"),prod.update)
    app.delete("/api/cart/delete",cart.remove)
// Route for adding quantity
app.put("/api/cart/addQuantity", cart.addQuantity);
// Route for subtracting quantity
app.put("/api/cart/subtractQuantity", cart.subtractQuantity);

 
}
module.exports = product;