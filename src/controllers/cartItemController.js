const CartItem = require("../models/CartItem");

exports.createCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.create(req.body);
        res.status(201).json({
            success: true,
            data: cartItem,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// exports.getCartItemsByUserId = async (req, res) => {
//     console.log("Fetching cart items for user:", req.params.userId);
//     try {
//         const cartItems = await CartItem.findByUserId(req.params.userId);
//         console.log("Cart items retrieved:", cartItems);
//         const items=[];
//         // for(let i=0;i<cartItems.length;i++){
//         //     const product = await Product.findById(cartItems[i].productId);
//         //     cartItems[i]=cartItems[i].toObject();
//         //     cartItems[i].product=product;   
//         //     items.push(cartItems[i]);
//         // }
//         res.status(200).json({
//             success: true,
//             count: cartItems.length,
//             data: cartItems,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Server Error",
//         });
//     }
// };

exports.getCartItemsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const cartItems = await CartItem.find({ userId })
      .populate("productId");

    res.status(200).json({
      success: true,
      count: cartItems.length,
      data: cartItems,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
