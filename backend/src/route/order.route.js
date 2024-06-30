// const cust = require("../controller/order.controller")

// const order = (app) =>{
//     app.get("/api/order/getlist",cust.getList)
// }
// module.exports = order;








const cust = require("../controller/order.controller")
const order = (app) =>{
    app.get("/api/order/getlist",cust.getList)
    app.post("/api/order/create",cust.create)
    app.put("/api/order/update",cust.update)
    app.delete("/api/order/delete",cust.remove)
}
module.exports = order;