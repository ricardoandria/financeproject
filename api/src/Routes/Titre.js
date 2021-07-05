const { Router } = require("express");
const TitreController = require("../controller/TitreController");
const isAuth = require("../middleware/auth");

const router = Router();
const titreController = new TitreController();

router.post("/create", isAuth, titreController.create);
router.put("/:id/assign", isAuth, titreController.assign);

module.exports = router;
