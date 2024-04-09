const cust = require("../controller/order_status.controller")

const order_status = (app) =>{
    app.get("/api/order_status/getlist",cust.getList)
    app.post("/api/order_status/create",cust.create)
    app.put("/api/order_status/update",cust.update)
    app.delete("/api/order_status/delete",cust.remove)
}
module.exports = order_status;
