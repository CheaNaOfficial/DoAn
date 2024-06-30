const stripe = require("stripe")("sk_test_51PNGzYP9QtsT4YaezIAjlVqpJ3j3zZaNIGrLNFX2FJU4lzPmzpofORZCNU5gPZONxBytfgKDe4YUColUNubGyLuc00gKzRnJCP");
const db = require("./../config/config");

const createPayment = async (req, res) => {
  try {
    const { lineItems, list } = req.body;
    const userId = req.user.userId;

    // Calculate total amount
    const totalAmount = lineItems.reduce((sum, item) => {
      return sum + (item.price_data.unit_amount / 100) * item.quantity;
    }, 0);

    // Create a Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: "https://your-app-url.com/success",
      cancel_url: "https://your-app-url.com/cancel",
    });

    // Insert order into the database
    const orderQuery = `INSERT INTO \`order\` (user_id, total_amount, paymentype) VALUES (?, ?, 'Online')`;
    const orderParams = [userId, totalAmount];
    const [orderResult] = await db.query(orderQuery, orderParams);
    const orderId = orderResult.insertId;

    // Insert order products into order_products table
    const orderProductQuery = `INSERT INTO order_product (order_id, product_id, quantity, unit_amount) VALUES (?, ?, ?, ?)`;
    for (const item of list) {
      const { product } = item;
      const orderProductParams = [orderId, product.Id, item.quantity, product.Price];
      await db.query(orderProductQuery, orderProductParams);
    }

    // Remove items from cart in the database
    const deleteCartItemsQuery = `DELETE FROM cart WHERE user_id = ?`;
    await db.query(deleteCartItemsQuery, [userId]);
    res.json({ sessionId: session.id });

  } catch (error) {
    // Log and send error response
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPayment
};
