
const cust = require("../controller/customer.controller")

const customer = (app) =>{
    app.get("/api/customer/getlist",cust.getList)
    app.get("/api/customer/getOne",cust.getOne)
    app.post("/api/customer/create",cust.create)
    app.put("/api/customer/update",cust.update)
    app.delete("/api/customer/delete",cust.remove)
}
module.exports = customer;