const router = require("express").Router();
const bandController = require("../../Controllers/bandController");


router.route("/items")
    .get(bandController.findAll);

// router.route("/store/:type")
//     .get(modelController.findItems);

router.route("/:id")
    .get(bandController.findById);

module.exports = router;