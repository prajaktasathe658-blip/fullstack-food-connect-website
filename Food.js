// const mongoose = require("mongoose");

// const foodSchema = new mongoose.Schema(
//     {
//         donor: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//             required: true
//         },

//         foodName: {
//             type: String,
//             required: true
//         },

//         description: String,

//         quantity: {
//             type: Number,
//             required: true
//         },

//         unit: {
//             type: String,
//             default: "meals"
//         },

//         foodType: {
//             type: String,
//             enum: [
//                 "vegetarian",
//                 "non-vegetarian",
//                 "vegan",
//                 "other"
//             ]
//         },

//         preparedAt: Date,

//         expiryTime: Date,

//         pickupAddress: {
//             type: String,
//             required: true
//         },

//         availableFrom: Date,

//         availableUntil: Date,

//         image: String,

//         status: {
//             type: String,
//             enum: [
//                 "available",
//                 "requested",
//                 "approved",
//                 "pickup_scheduled",
//                 "picked_up",
//                 "delivered",
//                 "completed",
//                 "cancelled"
//             ],
//             default: "available"
//         }
//     },
//     {
//         timestamps: true
//     }
// );

// module.exports = mongoose.model("Food", foodSchema);


//advanced version

const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        foodName: {
            type: String,
            required: true
        },

        description: String,

        quantity: {
            type: Number,
            required: true
        },

        unit: {
            type: String,
            default: "meals"
        },

        foodType: {
            type: String,
            enum: [
                "vegetarian",
                "non-vegetarian",
                "vegan",
                "other"
            ]
        },

        preparedAt: Date,

        expiryTime: Date,

        pickupAddress: {
            type: String,
            required: true
        },

        availableFrom: Date,

        availableUntil: Date,

        image: String,

        status: {
            type: String,
            enum: [
                "available",
                "requested",
                "approved",
                "pickup_scheduled",
                "picked_up",
                "delivered",
                "completed",
                "cancelled",
                "expired"
            ],
            default: "available"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Food", foodSchema);


