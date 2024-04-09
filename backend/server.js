
const express = require("express")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors({ // fixed "has been blocked by cors policy " from client
    origin:"*",
    "methods" : "GET, HEAD,PUT,PATCH,POST,DELETE"
 }))


const role = require("./src/route/role.route") // import
const category = require("./src/route/category.route")
const customer = require("./src/route/customer.route")
const employee = require("./src/route/employee.route")
const product = require("./src/route/product.route")
const order_status = require("./src/route/order_status.route")
const payment_method = require("./src/route/payment_method.route")

role(app)
category(app)
customer(app)
employee(app)
product(app)
order_status(app)
payment_method(app)

app.listen(8081,()=>{
    console.log("localhost:8081")
})
