// // const express = require("express");

// // const {
// //     requestFood,
// //     getMyRequests
// // } = require("../controllers/requestController");

// // const protect = require("../middleware/authMiddleware");

// // const router = express.Router();

// // router.post("/", protect, requestFood);

// // router.get("/my-requests", protect, getMyRequests);

// // module.exports = router;


// const express = require("express");

// const {
//   requestFood,
//   getMyRequests,
//   getRequestsForMyFood,
//   approveRequest,
//   rejectRequest,
//   markPickedUp,
//   markCompleted
// } = require("../controllers/requestController");

// const protect = require("../middleware/authMiddleware");

// const router = express.Router();

// router.post("/", protect, requestFood);

// router.get("/my-requests", protect, getMyRequests);

// router.get("/donor-requests", protect, getRequestsForMyFood);

// router.put("/:id/approve", protect, approveRequest);

// router.put("/:id/reject", protect, rejectRequest);

// router.put("/:id/picked-up", protect, markPickedUp);

// router.put("/:id/completed", protect, markCompleted);

// module.exports = router;




const express = require("express");

const {
    requestFood,
    getMyRequests,
    getRequestsForMyFood,
    approveRequest,
    rejectRequest,
    markPickedUp,
    markCompleted
} = require("../controllers/requestController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();


// NGO
router.post(
    "/",
    protect,
    authorizeRoles("ngo"),
    requestFood
);

router.get(
    "/my-requests",
    protect,
    authorizeRoles("ngo"),
    getMyRequests
);


// DONOR
router.get(
    "/donor-requests",
    protect,
    authorizeRoles("donor"),
    getRequestsForMyFood
);

router.put(
    "/:id/approve",
    protect,
    authorizeRoles("donor"),
    approveRequest
);

router.put(
    "/:id/reject",
    protect,
    authorizeRoles("donor"),
    rejectRequest
);

router.put(
    "/:id/picked-up",
    protect,
    authorizeRoles("donor"),
    markPickedUp
);

router.put(
    "/:id/completed",
    protect,
    authorizeRoles("donor"),
    markCompleted
);


module.exports = router;