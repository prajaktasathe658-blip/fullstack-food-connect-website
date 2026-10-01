//  const express = require("express");

//  const {
//      createFood,
//      getFoods,
//      getMyFoods,
//      getFoodById
//  } = require("../controllers/foodController");

// const protect = require("../middleware/authMiddleware");

// const router = express.Router();

// router.get("/", getFoods);

// router.post("/", protect, createFood);

// router.get("/my-food", protect, getMyFoods);
// router.get("/:id", getFoodById);

// module.exports = router;




// const express = require("express");

// const {
//   addFood,
//   getFood,
//   getFoodById
// } = require("../controllers/foodController");

// const router = express.Router();
// router.post("/", addFood);
// router.get("/", getFood);
// module.exports = router;

///this is also a working code
// const express = require("express");

// const {
//   addFood,
//   getFood,
//   getFoodById,
//   updateFood,
//   deleteFood,
//   getMyFood
// } = require("../controllers/foodController");

// const protect = require("../middleware/authMiddleware");

// const router = express.Router();

// router.post("/", protect, addFood);

// router.get("/", getFood);

// router.get("/my-food", protect, getMyFood);

// router.get("/:id", getFoodById);

// router.put("/:id", protect, updateFood);

// router.delete("/:id", protect, deleteFood);

// module.exports = router;





///updated twice
const express = require("express");

const {
    addFood,
    getFood,
    getAvailableFood,
    getFoodById,
    updateFood,
    deleteFood,
    getMyFood
} = require("../controllers/foodController");

const protect =
    require("../middleware/authMiddleware");

const authorizeRoles =
    require("../middleware/roleMiddleware");

const router = express.Router();


// Public
router.get(
    "/",
    getFood
);

router.get(
    "/available",
    getAvailableFood
);

router.get(
    "/my-food",
    protect,
    authorizeRoles("donor"),
    getMyFood
);

router.get(
    "/:id",
    getFoodById
);


// Donor
router.post(
    "/",
    protect,
    authorizeRoles("donor"),
    addFood
);

router.put(
    "/:id",
    protect,
    authorizeRoles("donor"),
    updateFood
);

router.delete(
    "/:id",
    protect,
    authorizeRoles("donor"),
    deleteFood
);

module.exports = router;