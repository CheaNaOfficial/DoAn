const { createPayment } = require("../controller/payment.controller");
const checkRole = require("../middleware/checkRole");


  const payment = (app) =>{
    app.post("/api/payment/create",checkRole(["IT"]),createPayment)
   
}
module.exports = payment;