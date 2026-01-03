const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoutes");
const addressRoutes = require("./routes/addressRoute");
const productRoutes = require("./routes/productRoutes");
const cartItemRoutes = require("./routes/cartItemRoute");

app.use("/api/users", userRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart-items", cartItemRoutes);

app.get("/", (req, res) => {
    res.send("MongoDB + Express is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
