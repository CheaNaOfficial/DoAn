




const db = require("../config/config")
const {logError,isEmptyOrNull, removeFile} = require("../config/helper")

const getList = async (req, res) => {
    try {
        const [cartItems] = await db.query("SELECT * FROM cart ORDER BY cart_id DESC");

        const cartsWithProducts = await Promise.all(cartItems.map(async (cartItem) => {
            const [product] = await db.query("SELECT * FROM product WHERE id = ?", [cartItem.product_id]);
            cartItem.product = product[0]; // Extract the first element of the array
            return cartItem;
        }));

        res.json(
            cartsWithProducts
        );
    } catch (err) {
        logError("cart.getList", err, res);
    }
}



	
const create = async (req, res) => {
    try {
      const { product_id, quantity } = req.body;
      const user_id = req.user.userId;
  
      const sql = "INSERT INTO cart (user_id, product_id, quantity) VALUES (:user_id, :product_id, :quantity)";
      const param = {
        user_id,
        product_id,
        quantity
      };
  
      try {
        const [data] = await db.query(sql, param);
        res.json({
          message: "Cart save successfully!",
          data
        });
      } catch (err) {
        logError("cart.create", err, res);
        console.error("Database error:", err); // Log for debugging
        res.status(500).json({ message: "Error adding item to cart." }); // Informative error message
      }
    } catch (err) {
      console.error("Error processing request:", err); // Log for debugging
      res.status(500).json({ message: "An error occurred. Please try again." }); // Generic error message
    }
  };
  

// const update = async (req,res) => {
//     try{
//         var {
//             cart_id,
//             user_id,
//             product_id,
//             quantity
//         } = req.body;
//         var Image = null;
//         if(req.file){
//             Image = req.file.filename // change image | new image
//         }else{
//             Image = req.body.Image // get Old image
//         }
//         var message = {}; // empty object
//         if(isEmptyOrNull(Id)){
//             message.Id = "Id required!"
//         }
//         if(isEmptyOrNull(Name)){
//             message.Name = "Name required!"
//         }
//         if(isEmptyOrNull(Qty)){
//             message.Qty = "Qty required!"
//         }
//         if(isEmptyOrNull(Price)){
//             message.Price = "Price required!"
//         }
//         if(Object.keys(message).length > 0){
//             res.json({
//                 error:true,
//                 message:message
//             })
//             return false;   
//         }
//         var param = {
//             Id,
//             CategoryId,
//             Name,
//             Description,
//             Qty,
//             Price,
//             Discount,
//             Status,
//             Image
//         }
//         const [dataInfo] = await db.query("SELECT * FROM product WHERE Id=:Id",{Id:Id});
//         if(dataInfo.length > 0){
//             var sql = "UPDATE product SET CategoryId=:CategoryId, Name=:Name ,Description=:Description, Qty=:Qty, Price=:Price, Discount=:Discount, Image=:Image, Status=:Image WHERE Id = :Id";
//             const [data] = await db.query(sql,param);
//             if(data.affectedRows){
//                 if(req.file && !isEmptyOrNull(req.body.Image)){
//                     await removeFile(req.body.Image) // remove old file
//                 }
//             }
//             res.json({
//                 message: (data.affectedRows != 0 ? "Update success" : "Not found"),
//                 data:data
//             })
//         }else{
//             res.json({
//                 message: "Not found",
//                 error:true
//             })
//         }
//     }catch(err){
//         logError("product.update",err,res)
//     }
// }



const remove = async (req,res) =>{
    try{
        var sql ="DELETE FROM `cart` WHERE cart_id=:cart_id"
        var param = {
            cart_id : req.body.cart_id
        } 
        const [data] = await db.query(sql,param);
        res.json({
            message:data.affectedRows != 0 ? "delete success!" :"something wrong!",
            data:data
        })
    }catch(err){
        logError("cart.remove",err,res)
    }
}
const getNumberCart = async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming userId is available in req.user

    const [cartCountResult] = await db.query("SELECT SUM(quantity) AS totalQuantity FROM cart WHERE user_id = ?", [userId]);
    const totalQuantity = cartCountResult[0].totalQuantity || 0; // If no items in the cart, default to 0

    res.json({
      totalQuantity
    });
  } catch (err) {
    logError("cart.getNumberCart", err, res);
  }
};

const addQuantity = async (req, res) => {
  try {
      const { cart_id } = req.body;

      const sql = "UPDATE cart SET quantity = quantity + 1 WHERE cart_id = ?";
      const [data] = await db.query(sql, [cart_id]);

      res.json({
          message: data.affectedRows !== 0 ? "Quantity added successfully!" : "Cart item not found.",
          data: data
      });
  } catch (err) {
      logError("cart.addQuantity", err, res);
  }
};

const subtractQuantity = async (req, res) => {
  try {
      const { cart_id } = req.body;

      const sql = "UPDATE cart SET quantity = CASE WHEN quantity > 0 THEN quantity - 1 ELSE 0 END WHERE cart_id = ?";
      const [data] = await db.query(sql, [cart_id]);

      res.json({
          message: data.affectedRows !== 0 ? "Quantity subtracted successfully!" : "Cart item not found.",
          data: data
      });
  } catch (err) {
      logError("cart.subtractQuantity", err, res);
  }
};
module.exports = {
    getList,
    // getOne,
    create,
    // update,
    remove,getNumberCart, addQuantity,
    subtractQuantity
}


