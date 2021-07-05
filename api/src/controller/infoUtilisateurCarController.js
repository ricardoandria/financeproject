const UtilisateurCar = require("../models/informationutilisateurCar");
const { Request, Response } = require("express");

class UtilisateurCarController {
  /**
   * @route POST api/Utilisateur/create
   * @param {Request} req
   * @param {Response} res
   */

  create = async (req, res) => {
    const { nom, prenom, matricule, fonction } = req.body;

    const newUtilisateur = new UtilisateurCar({
      nom,
      prenom,
      matricule,
      fonction,
    });

    try {
      const utilisateur = await newUtilisateur.save();
      res.status(201).send(utilisateur);
    } catch (err) {
      res.status(404).send("Something went wrong");
      console.log({ err });
    }
  };

  /**
   * @route GET api/OccupantCar/fetch
   * @param {Response} res
   */

  fetch = async (_, res) => {
    try {
      const OccupantCar = await UtilisateurCar.find();
      res.status(200).send(OccupantCar);
    } catch (err) {
      res.status(200).send("something wrong");
      console.log({ err });
    }
  };
}

module.exports = UtilisateurCarController;
