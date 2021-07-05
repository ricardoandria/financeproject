const Logement = require("../models/logementModel");
const { Request, Response } = require("express");

class LogementController {
  /**
   * @route POST api/logement/create
   * @param {Request} req
   * @param {Response} res
   */

  create = async (req, res) => {
    const {
      typeBatiment,
      ministere,
      typeLogement,
      localisation,
      categorie,
      adresse,
      nomHotel,
      fokotany,
      isAttributed,
      enceinteLieuTravail,
      titreCISJ,
      titreNomPropiete,
      titreNumTitre,
      titreSurface,
      titreNomProprietaire,
      titreAffectation,
      titreCin,
      titreCoordonneGPSX,
      titreCoordonneGPSY,
      infoTechLogDateSaisie,
      infoTechLogSurfaceBatieLong,
      infoTechLogSurfaceBatieLarg,
      infoTechLogCloture,
      infoTechLogPortailPrincipal,
      infoTechLogCour,
      infoTechLogParking,
      infoTechLogJardin,
      infoTechLogAnneDeConstruction,
      infoTechLogTypesMateriauxConstruction,
      infoTechLogTypeDeToiture,
    } = req.body;

    const newLogement = new Logement({
      typeBatiment,
      ministere,
      typeLogement,
      localisation,
      categorie,
      adresse,
      nomHotel,
      fokotany,
      isAttributed,
      enceinteLieuTravail,
      titreCISJ,
      titreNomPropiete,
      titreNumTitre,
      titreSurface,
      titreNomProprietaire,
      titreAffectation,
      titreCin,
      titreCoordonneGPSX,
      titreCoordonneGPSY,
      infoTechLogDateSaisie,
      infoTechLogSurfaceBatieLong,
      infoTechLogSurfaceBatieLarg,
      infoTechLogCloture,
      infoTechLogPortailPrincipal,
      infoTechLogCour,
      infoTechLogParking,
      infoTechLogJardin,
      infoTechLogAnneDeConstruction,
      infoTechLogTypesMateriauxConstruction,
      infoTechLogTypeDeToiture,
    });

    try {
      const logement = await newLogement.save();
      res.status(201).send(logement);
    } catch (err) {
      res.status(404).send("something went wrong");
      console.log({ err });
    }
  };

  /**
   *
   * @route GET api/logement/fetch
   * @param {Response} res
   */

  fetch = async (_, res) => {
    try {
      const logement = await Logement.find().populate(
        "fokotany",
        "nom commune"
      );

      res.status(200).send(logement);
    } catch (err) {
      res.status(404).send("Something wrong");
      console.log({ err });
    }
  };

  /**
   * @route PUT api/logement/:id/assign
   * @param {Request} req
   * @param {Response} res
   */
  assign = async (req, res) => {
    const { id } = req.params;
    try {
      await Logement.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            isAttributed: req.body.isAttributed,
          },
        },
        { new: true }
      );
    } catch (err) {
      res.status(404).send("Something went wrong");
    }
  };

  /**
   * @route GET api/logement/:id
   * @param {Request} req
   * @param {Response} res
   */

  search = async (req, res) => {
    const { adresse } = req.params;
    try {
      const loge = await Logement.find({ adresse: adresse });
      if (!loge) res.status(404).send("Logement introuvable");
      res.status(200).send(book);
    } catch (err) {
      res.status(400).send("something went wrong");
      console.log({ err });
    }
  };
}

module.exports = LogementController;
