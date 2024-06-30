
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
const product = require("./src/route/product.route")
const payment_method = require("./src/route/payment_method.route")
const cart = require("./src/route/cart.route")
const user = require("./src/route/user.route")
const payment = require("./src/route/payment.route")
const order = require("./src/route/order.route")
const user_admin =require("./src/route/user_admin.route")



role(app)
category(app)
customer(app)
// employee(app)
product(app)
payment_method(app)
cart(app)
user(app)
payment(app)
order(app)
user_admin(app)




app.listen(8081,()=>{
    console.log("localhost:8081")
})
