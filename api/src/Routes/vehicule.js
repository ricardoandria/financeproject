const { Router } = require("express");
const VehiculeController = require("../controller/vehiculeController");
const isAuth = require("../middleware/auth");

const router = Router();
const vehiculeController = new VehiculeController();

router.post("/create", isAuth, vehiculeController.create);
router.get("/fetch", isAuth, vehiculeController.fetch);
router.put("/:id/assign", isAuth, vehiculeController.assign);

module.exports = router;
