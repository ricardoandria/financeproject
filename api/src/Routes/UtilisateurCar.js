const { Router } = require("express");
const UtilisateurCarController = require("../controller/infoUtilisateurCarController");
const isAuth = require("../middleware/auth");

const router = Router();
const utilisateurCar = new UtilisateurCarController();

router.post("/create", isAuth, utilisateurCar.create);
router.get("/fetch", isAuth, utilisateurCar.fetch);

module.exports = router;
