const { Router } = require("express");
const regionRouter = require("./region");
const communeRouter = require("./commune");
const fokontanyRouter = require("../routes/fokontany");
const conjointRouter = require("./InfoConjoint");
const OccupantRouter = require("./Occupant");
const LogementRouter = require("./Logement");
const UserRouter = require("./users");
const AuthRouter = require("./auth");
const proprietaireRouter = require("./proprietaire");
const TitreRouter = require("./Titre");
const CadastreRouter = require("./Cadastre");
const VehiculeRouter = require("./vehicule");
const UtilisateurRouter = require("./UtilisateurCar");

const routes = Router();

routes.use("/region", regionRouter);
routes.use("/commune", communeRouter);
routes.use("/fokotany", fokontanyRouter);
routes.use("/Conjoint", conjointRouter);
routes.use("/occupant", OccupantRouter);
routes.use("/logement", LogementRouter);
routes.use("/users", UserRouter);
routes.use("/auth", AuthRouter);
routes.use("/titre", TitreRouter);
routes.use("/cadastre", CadastreRouter);
routes.use("/vehicule", VehiculeRouter);
routes.use("/Utilisateur", UtilisateurRouter);

module.exports = routes;
