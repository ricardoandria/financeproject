const { Router } = require("express");
const CadastreController = require("../controller/CadastreController");
const isAuth = require("../middleware/auth");

const router = Router();
const cadastreController = new CadastreController();

router.post("/create", isAuth, cadastreController.create);
router.put("/:id/assign", isAuth, cadastreController.assign);

module.exports = router;
