// const Food = require("../models/Food");
// const createFood = async (req, res) => {
//     try {

//         const food = await Food.create({
//             ...req.body,
//             donor: req.user.id
//         });

//         res.status(201).json({
//             message: "Food posted successfully",
//             food
//         });

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }
// };

// const getFoods = async (req, res) => {
//     try {

//         const foods = await Food.find({
//             status: "available"
//         })
//         .populate("donor", "name email phone");

//         res.json(foods);

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }
// };

// const getMyFoods = async (req, res) => {
//     try {

//         const foods = await Food.find({
//             donor: req.user.id
//         });

//         res.json(foods);

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }
// };



// //advanced
// const getFoodById = async (req, res) => {
//   try {
//     const food = await Food.findById(req.params.id);

//     if (!food) {
//       return res.status(404).json({
//         message: "Food not found",
//       });
//     }

//     res.status(200).json(food);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to get food details",
//       error: error.message,
//     });
//   }
// };

// module.exports = {
//     createFood,
//     getFoods,
//     getMyFoods,
//     getFoodById
// };


// const Food = require("../models/Food");

// // ADD FOOD
// const addFood = async (req, res) => {
//   try {
//     const food = await Food.create({
//       donor: req.user.id,
//       foodName: req.body.foodName,
//       description: req.body.description,
//       quantity: req.body.quantity,
//       unit: req.body.unit,
//       foodType: req.body.foodType,
//       preparedAt: req.body.preparedAt,
//       expiryTime: req.body.expiryTime,
//       pickupAddress: req.body.pickupAddress,
//       availableFrom: req.body.availableFrom,
//       availableUntil: req.body.availableUntil,
//       image: req.body.image
//     });

//     res.status(201).json({
//       message: "Food added successfully",
//       food
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to add food",
//       error: error.message
//     });
//   }
// };


// // GET ALL FOOD
// const getFood = async (req, res) => {
//   try {
//     const food = await Food.find()
//       .populate("donor", "name email")
//       .sort({ createdAt: -1 });

//     res.status(200).json(food);

//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to get food",
//       error: error.message
//     });
//   }
// };


// // GET SINGLE FOOD
// const getFoodById = async (req, res) => {
//   try {
//     const food = await Food.findById(req.params.id)
//       .populate("donor", "name email");

//     if (!food) {
//       return res.status(404).json({
//         message: "Food not found"
//       });
//     }

//     res.status(200).json(food);

//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to get food details",
//       error: error.message
//     });
//   }
// };


// // UPDATE FOOD
// const updateFood = async (req, res) => {
//   try {
//     const food = await Food.findById(req.params.id);

//     if (!food) {
//       return res.status(404).json({
//         message: "Food not found"
//       });
//     }

//     if (food.donor.toString() !== req.user.id) {
//       return res.status(403).json({
//         message: "You can only edit your own food"
//       });
//     }

//     if (food.status !== "available") {
//       return res.status(400).json({
//         message: "Only available food can be edited"
//       });
//     }

//     const updatedFood = await Food.findByIdAndUpdate(
//       req.params.id,
//       {
//         foodName: req.body.foodName,
//         description: req.body.description,
//         quantity: req.body.quantity,
//         unit: req.body.unit,
//         foodType: req.body.foodType,
//         expiryTime: req.body.expiryTime,
//         pickupAddress: req.body.pickupAddress,
//         availableFrom: req.body.availableFrom,
//         availableUntil: req.body.availableUntil,
//         image: req.body.image
//       },
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     res.json({
//       message: "Food updated successfully",
//       food: updatedFood
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to update food",
//       error: error.message
//     });
//   }
// };


// // DELETE FOOD
// const deleteFood = async (req, res) => {
//   try {
//     const food = await Food.findById(req.params.id);

//     if (!food) {
//       return res.status(404).json({
//         message: "Food not found"
//       });
//     }

//     if (food.donor.toString() !== req.user.id) {
//       return res.status(403).json({
//         message: "You can only delete your own food"
//       });
//     }

//     if (food.status !== "available") {
//       return res.status(400).json({
//         message: "Only available food can be deleted"
//       });
//     }

//     await Food.findByIdAndDelete(req.params.id);

//     res.json({
//       message: "Food deleted successfully"
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to delete food",
//       error: error.message
//     });
//   }
// };


// // DONOR'S FOOD
// const getMyFood = async (req, res) => {
//   try {
//     const food = await Food.find({
//       donor: req.user.id
//     }).sort({ createdAt: -1 });

//     res.json(food);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };


// module.exports = {
//   addFood,
//   getFood,
//   getFoodById,
//   updateFood,
//   deleteFood,
//   getMyFood
// };




const Food = require("../models/Food");


// Add food
const addFood = async (req, res) => {
    try {

        const food = await Food.create({
            donor: req.user.id,
            foodName: req.body.foodName,
            description: req.body.description,
            quantity: req.body.quantity,
            unit: req.body.unit,
            foodType: req.body.foodType,
            preparedAt: req.body.preparedAt,
            expiryTime: req.body.expiryTime,
            pickupAddress: req.body.pickupAddress,
            availableFrom: req.body.availableFrom,
            availableUntil: req.body.availableUntil,
            image: req.body.image
        });

        res.status(201).json({
            message: "Food added successfully",
            food
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to add food",
            error: error.message
        });

    }
};


// Get all food
const getFood = async (req, res) => {
    try {

        const now = new Date();

        await Food.updateMany(
            {
                expiryTime: {
                    $lt: now
                },
                status: {
                    $in: [
                        "available",
                        "requested"
                    ]
                }
            },
            {
                status: "expired"
            }
        );

        const food =
            await Food.find()
                .populate(
                    "donor",
                    "name email"
                )
                .sort({
                    createdAt: -1
                });

        res.json(food);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// Get available food only
const getAvailableFood = async (req, res) => {
    try {

        const now = new Date();

        await Food.updateMany(
            {
                expiryTime: {
                    $lt: now
                },
                status: "available"
            },
            {
                status: "expired"
            }
        );

        const food =
            await Food.find({
                status: "available",
                $or: [
                    {
                        expiryTime: {
                            $exists: false
                        }
                    },
                    {
                        expiryTime: {
                            $gt: now
                        }
                    }
                ]
            })
                .populate(
                    "donor",
                    "name email"
                )
                .sort({
                    createdAt: -1
                });

        res.json(food);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// Get food by ID
const getFoodById = async (req, res) => {
    try {

        const food =
            await Food.findById(req.params.id)
                .populate(
                    "donor",
                    "name email"
                );

        if (!food) {
            return res.status(404).json({
                message: "Food not found"
            });
        }

        if (
            food.expiryTime &&
            new Date(food.expiryTime) < new Date() &&
            food.status === "available"
        ) {
            food.status = "expired";
            await food.save();
        }

        res.json(food);

    } catch (error) {

        res.status(500).json({
            message:
                "Failed to get food details"
        });

    }
};


// Update food
const updateFood = async (req, res) => {
    try {

        const food =
            await Food.findById(req.params.id);

        if (!food) {
            return res.status(404).json({
                message: "Food not found"
            });
        }

        if (
            food.donor.toString() !==
            req.user.id
        ) {
            return res.status(403).json({
                message:
                    "You can only edit your own food"
            });
        }

        if (food.status !== "available") {
            return res.status(400).json({
                message:
                    "Only available food can be edited"
            });
        }

        const updatedFood =
            await Food.findByIdAndUpdate(
                req.params.id,
                {
                    foodName: req.body.foodName,
                    description: req.body.description,
                    quantity: req.body.quantity,
                    unit: req.body.unit,
                    foodType: req.body.foodType,
                    expiryTime: req.body.expiryTime,
                    pickupAddress:
                        req.body.pickupAddress,
                    availableFrom:
                        req.body.availableFrom,
                    availableUntil:
                        req.body.availableUntil,
                    image: req.body.image
                },
                {
                    new: true,
                    runValidators: true
                }
            );

        res.json({
            message:
                "Food updated successfully",
            food: updatedFood
        });

    } catch (error) {

        res.status(500).json({
            message:
                "Failed to update food"
        });

    }
};


// Delete food
const deleteFood = async (req, res) => {
    try {

        const food =
            await Food.findById(req.params.id);

        if (!food) {
            return res.status(404).json({
                message: "Food not found"
            });
        }

        if (
            food.donor.toString() !==
            req.user.id
        ) {
            return res.status(403).json({
                message:
                    "You can only delete your own food"
            });
        }

        if (food.status !== "available") {
            return res.status(400).json({
                message:
                    "Only available food can be deleted"
            });
        }

        await Food.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:
                "Food deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message:
                "Failed to delete food"
        });

    }
};


// My food
const getMyFood = async (req, res) => {
    try {

        const food =
            await Food.find({
                donor: req.user.id
            })
                .sort({
                    createdAt: -1
                });

        res.json(food);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    addFood,
    getFood,
    getAvailableFood,
    getFoodById,
    updateFood,
    deleteFood,
    getMyFood
};