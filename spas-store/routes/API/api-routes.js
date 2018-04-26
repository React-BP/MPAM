const router = require("express").Router();
const bandController = require("../../Controllers/bandController");

router.route("/clothing")
    .get(modelController.findAll);

// router.route("/store/:type")
//     .get(modelController.findItems);

// router.route("/:id")
//     .get(modelController.findItem);

module.exports = router;