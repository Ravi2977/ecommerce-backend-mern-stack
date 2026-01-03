const mongoose = require("mongoose");
const CartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,                 
        required: true,
        default: 1,
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CartItem", CartItemSchema);        