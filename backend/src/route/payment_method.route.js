
const cust = require("../controller/payment_method.controller")

const payment_method = (app) =>{
    app.get("/api/payment_method/getlist",cust.getList)
    app.post("/api/payment_method/create",cust.create)
    app.put("/api/payment_method/update",cust.update)
    app.delete("/api/payment_method/delete",cust.remove)
}
module.exports = payment_method;
