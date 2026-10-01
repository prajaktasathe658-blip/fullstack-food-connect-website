// const mongoose = require("mongoose");

// const foodRequestSchema = new mongoose.Schema(
//     {
//         food: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Food",
//             required: true
//         },

//         ngo: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//             required: true
//         },

//         requestedQuantity: {
//             type: Number,
//             required: true
//         },

//         peopleCount: Number,

//         message: String,

//         status: {
//             type: String,
//             enum: [
//                 "pending",
//                 "approved",
//                 "rejected",
//                 "pickup_scheduled",
//                 "picked_up",
//                 "delivered",
//                 "completed",
//                 "cancelled"
//             ],
//             default: "pending"
//         },

//         pickupDate: Date,

//         pickupTime: String
//     },
//     {
//         timestamps: true
//     }
// );

// module.exports = mongoose.model(
//     "FoodRequest",
//     foodRequestSchema
// );




//advanced

const mongoose = require("mongoose");

const foodRequestSchema = new mongoose.Schema(
    {
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
            required: true
        },

        ngo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        requestedQuantity: {
            type: Number,
            required: true
        },

        peopleCount: Number,

        message: String,

        status: {
            type: String,
            enum: [
                "pending",
                "approved",
                "rejected",
                "pickup_scheduled",
                "picked_up",
                "delivered",
                "completed",
                "cancelled"
            ],
            default: "pending"
        },

        pickupDate: Date,

        pickupTime: String,

        statusHistory: [
            {
                status: String,
                changedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "FoodRequest",
    foodRequestSchema
);
