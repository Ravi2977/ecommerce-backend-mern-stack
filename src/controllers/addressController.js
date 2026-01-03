const Address = require("../models/Address");
const User = require("../models/User");
exports.createAddress = async (req, res) => {
    try {
        const address = await Address.create(req.body);
        res.status(201).json(address);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAddressesByUSerId = async (req, res) => {
    try {
        const addresses = await Address.find({ userId: req.params.userId })
        // .populate("userId"); // ✅ fetch addresses by user ID
        res.status(200).json({
            success: true,
            data: addresses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.getAllAddresses = async (req, res) => {
    try {
        const addresses = await Address.find().populate("userId"); // ✅ fetch all addresses

        //populate("userId") is alternate way of doing below commented code
        // const response = [];
        // for (let i = 0; i < addresses.length; i++) {
        //     // const user = await User.findById(addresses[i].userId.toString())
        //     const user = await User.findById(addresses[i].userId.toString())
        //     const addressObj = addresses[i].toObject();
        //     addressObj.user = user;
        //     response.push(addressObj);
        // }
        res.status(200).json({
            success: true,
            count: addresses.length,
            data: addresses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// exports.getAllAddresses = async (req, res) => {
//     try {
//         const addresses = await Address.find(); // ✅ fetch all addresses
//         for(let i=0;i<addresses.length;i++){
//             console.log(addresses[i].userId.toString());
//             let user = await getuserByUSerId(addresses[i].userId.toString());
//             // addresses[i]=addresses[i].toObject();
//             // addresses[i].user=user.data;
//         }   

//         res.status(200).json({
//             success: true,
//             count: addresses.length,
//             data: addresses,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,             
//             message: error.message,
//         });
//     }
// }