// const FoodRequest = require("../models/FoodRequest");
// const Food = require("../models/Food");

// const requestFood = async (req, res) => {
//     try {
//         const {
//             foodId,
//             requestedQuantity,
//             peopleCount,
//             message
//         } = req.body;

//         const food = await Food.findById(foodId);

//         if (!food) {
//             return res.status(404).json({
//                 message: "Food not found"
//             });
//         }

//         if (food.status !== "available") {
//             return res.status(400).json({
//                 message: "Food is no longer available"
//             });
//         }

//         const request = await FoodRequest.create({
//             food: foodId,
//             ngo: req.user.id,
//             requestedQuantity,
//             peopleCount,
//             message
//         });

//         food.status = "requested";

//         await food.save();

//         res.status(201).json({
//             message: "Food requested successfully",
//             request
//         });

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }
// };

// const getMyRequests = async (req, res) => {

//     try {

//         const requests = await FoodRequest.find({
//             ngo: req.user.id
//         })
//         .populate("food")
//         .populate("ngo", "name organizationName");

//         res.json(requests);

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }
// };

// module.exports = {
//     requestFood,
//     getMyRequests
// };




//updated




// const FoodRequest = require("../models/FoodRequest");
// const Food = require("../models/Food");


// // REQUEST FOOD
// const requestFood = async (req, res) => {
//   try {
//     const {
//       foodId,
//       requestedQuantity,
//       peopleCount,
//       message
//     } = req.body;

//     if (!foodId || !requestedQuantity) {
//       return res.status(400).json({
//         message: "Food and requested quantity are required"
//       });
//     }

//     const food = await Food.findById(foodId);

//     if (!food) {
//       return res.status(404).json({
//         message: "Food not found"
//       });
//     }

//     if (food.status !== "available") {
//       return res.status(400).json({
//         message: "Food is no longer available"
//       });
//     }

//     if (requestedQuantity > food.quantity) {
//       return res.status(400).json({
//         message: "Requested quantity is greater than available quantity"
//       });
//     }

//     const request = await FoodRequest.create({
//       food: foodId,
//       ngo: req.user.id,
//       requestedQuantity,
//       peopleCount,
//       message
//     });

//     food.status = "requested";

//     await food.save();

//     res.status(201).json({
//       message: "Food requested successfully",
//       request
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// // NGO REQUESTS
// const getMyRequests = async (req, res) => {
//   try {
//     const requests = await FoodRequest.find({
//       ngo: req.user.id
//     })
//       .populate("food")
//       .populate("ngo", "name organizationName")
//       .sort({ createdAt: -1 });

//     res.json(requests);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// // DONOR REQUESTS
// const getRequestsForMyFood = async (req, res) => {
//   try {
//     const foods = await Food.find({
//       donor: req.user.id
//     }).select("_id");

//     const foodIds = foods.map(food => food._id);

//     const requests = await FoodRequest.find({
//       food: { $in: foodIds }
//     })
//       .populate("food")
//       .populate("ngo", "name organizationName email")
//       .sort({ createdAt: -1 });

//     res.json(requests);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// // ACCEPT
// const approveRequest = async (req, res) => {
//   try {
//     const request = await FoodRequest.findById(req.params.id)
//       .populate("food");

//     if (!request) {
//       return res.status(404).json({
//         message: "Request not found"
//       });
//     }

//     if (request.food.donor.toString() !== req.user.id) {
//       return res.status(403).json({
//         message: "Not authorized"
//       });
//     }

//     request.status = "approved";

//     request.food.status = "approved";

//     await request.save();
//     await request.food.save();

//     res.json({
//       message: "Request approved successfully",
//       request
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// // REJECT
// const rejectRequest = async (req, res) => {
//   try {
//     const request = await FoodRequest.findById(req.params.id)
//       .populate("food");

//     if (!request) {
//       return res.status(404).json({
//         message: "Request not found"
//       });
//     }

//     if (request.food.donor.toString() !== req.user.id) {
//       return res.status(403).json({
//         message: "Not authorized"
//       });
//     }

//     request.status = "rejected";

//     request.food.status = "available";

//     await request.save();
//     await request.food.save();

//     res.json({
//       message: "Request rejected",
//       request
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// // PICKED UP
// const markPickedUp = async (req, res) => {
//   try {
//     const request = await FoodRequest.findById(req.params.id)
//       .populate("food");

//     if (!request) {
//       return res.status(404).json({
//         message: "Request not found"
//       });
//     }

//     request.status = "picked_up";
//     request.food.status = "picked_up";

//     await request.save();
//     await request.food.save();

//     res.json({
//       message: "Food marked as picked up",
//       request
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// // COMPLETED
// const markCompleted = async (req, res) => {
//   try {
//     const request = await FoodRequest.findById(req.params.id)
//       .populate("food");

//     if (!request) {
//       return res.status(404).json({
//         message: "Request not found"
//       });
//     }

//     request.status = "completed";
//     request.food.status = "completed";

//     await request.save();
//     await request.food.save();

//     res.json({
//       message: "Food donation completed",
//       request
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// module.exports = {
//   requestFood,
//   getMyRequests,
//   getRequestsForMyFood,
//   approveRequest,
//   rejectRequest,
//   markPickedUp,
//   markCompleted
// };







const FoodRequest =
    require("../models/FoodRequest");

const Food =
    require("../models/Food");

const Notification =
    require("../models/Notification");


// NGO requests food
const requestFood = async (req, res) => {

    try {

        const {
            foodId,
            requestedQuantity,
            peopleCount,
            message
        } = req.body;

        if (
            !foodId ||
            !requestedQuantity
        ) {
            return res.status(400).json({
                message:
                    "Food and requested quantity are required"
            });
        }

        const food =
            await Food.findById(foodId);

        if (!food) {
            return res.status(404).json({
                message:
                    "Food not found"
            });
        }

        if (
            food.status !== "available"
        ) {
            return res.status(400).json({
                message:
                    "Food is no longer available"
            });
        }

        if (
            food.expiryTime &&
            new Date(food.expiryTime) < new Date()
        ) {
            food.status = "expired";
            await food.save();

            return res.status(400).json({
                message:
                    "This food has expired"
            });
        }

        if (
            requestedQuantity >
            food.quantity
        ) {
            return res.status(400).json({
                message:
                    "Requested quantity is greater than available quantity"
            });
        }

        const request =
            await FoodRequest.create({
                food: foodId,
                ngo: req.user.id,
                requestedQuantity,
                peopleCount,
                message,
                statusHistory: [
                    {
                        status: "pending"
                    }
                ]
            });

        food.status = "requested";

        await food.save();


        // Notify donor
        await Notification.create({
            user: food.donor,
            message:
                `New request received for ${food.foodName}`,
            type: "request"
        });


        res.status(201).json({
            message:
                "Food requested successfully",
            request
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// NGO requests
const getMyRequests = async (req, res) => {

    try {

        const requests =
            await FoodRequest.find({
                ngo: req.user.id
            })
                .populate("food")
                .populate(
                    "ngo",
                    "name organizationName email"
                )
                .sort({
                    createdAt: -1
                });

        res.json(requests);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// Donor requests
const getRequestsForMyFood = async (
    req,
    res
) => {

    try {

        const foods =
            await Food.find({
                donor: req.user.id
            }).select("_id");

        const foodIds =
            foods.map(
                food => food._id
            );

        const requests =
            await FoodRequest.find({
                food: {
                    $in: foodIds
                }
            })
                .populate("food")
                .populate(
                    "ngo",
                    "name organizationName email"
                )
                .sort({
                    createdAt: -1
                });

        res.json(requests);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// Approve
const approveRequest = async (
    req,
    res
) => {

    try {

        const request =
            await FoodRequest.findById(
                req.params.id
            ).populate("food");

        if (!request) {
            return res.status(404).json({
                message:
                    "Request not found"
            });
        }

        if (
            request.food.donor.toString() !==
            req.user.id
        ) {
            return res.status(403).json({
                message:
                    "Not authorized"
            });
        }

        request.status = "approved";

        request.statusHistory.push({
            status: "approved"
        });

        request.food.status = "approved";

        await request.save();
        await request.food.save();


        await Notification.create({
            user: request.ngo._id,
            message:
                `Your request for ${request.food.foodName} has been approved`,
            type: "approved"
        });


        res.json({
            message:
                "Request approved successfully",
            request
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });

    }
};


// Reject
const rejectRequest = async (
    req,
    res
) => {

    try {

        const request =
            await FoodRequest.findById(
                req.params.id
            ).populate("food");

        if (!request) {
            return res.status(404).json({
                message:
                    "Request not found"
            });
        }

        if (
            request.food.donor.toString() !==
            req.user.id
        ) {
            return res.status(403).json({
                message:
                    "Not authorized"
            });
        }

        request.status = "rejected";

        request.statusHistory.push({
            status: "rejected"
        });

        request.food.status = "available";

        await request.save();
        await request.food.save();


        await Notification.create({
            user: request.ngo._id,
            message:
                `Your request for ${request.food.foodName} was rejected`,
            type: "rejected"
        });


        res.json({
            message:
                "Request rejected",
            request
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });

    }
};


// Picked up
const markPickedUp = async (
    req,
    res
) => {

    try {

        const request =
            await FoodRequest.findById(
                req.params.id
            ).populate("food");

        if (!request) {
            return res.status(404).json({
                message:
                    "Request not found"
            });
        }

        if (
            request.food.donor.toString() !==
            req.user.id
        ) {
            return res.status(403).json({
                message:
                    "Not authorized"
            });
        }

        request.status = "picked_up";

        request.statusHistory.push({
            status: "picked_up"
        });

        request.food.status = "picked_up";

        await request.save();
        await request.food.save();


        await Notification.create({
            user: request.ngo._id,
            message:
                `${request.food.foodName} has been marked as picked up`,
            type: "picked_up"
        });


        res.json({
            message:
                "Food marked as picked up",
            request
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });

    }
};


// Completed
const markCompleted = async (
    req,
    res
) => {

    try {

        const request =
            await FoodRequest.findById(
                req.params.id
            ).populate("food");

        if (!request) {
            return res.status(404).json({
                message:
                    "Request not found"
            });
        }

        if (
            request.food.donor.toString() !==
            req.user.id
        ) {
            return res.status(403).json({
                message:
                    "Not authorized"
            });
        }

        request.status = "completed";

        request.statusHistory.push({
            status: "completed"
        });

        request.food.status = "completed";

        await request.save();
        await request.food.save();


        await Notification.create({
            user: request.ngo,
            message:
                `${request.food.foodName} donation has been completed`,
            type: "completed"
        });


        res.json({
            message:
                "Food donation completed",
            request
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });

    }
};


module.exports = {
    requestFood,
    getMyRequests,
    getRequestsForMyFood,
    approveRequest,
    rejectRequest,
    markPickedUp,
    markCompleted
};