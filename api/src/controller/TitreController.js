const Titre = require("../models/informationFonciereTitreModel");
const { Request, Response } = require("express");

class TitreController {
  /**
   * @route POST api/infoFonciere/create
   * @param {Request} req
   * @param {Response} res
   */

  create = async (req, res) => {
    const {
      InfoFoncTitreCISJ,
      InfoFoncTitreNomPropiete,
      InfoFoncTitreNumTitre,
      InfoFoncTitreSurface,
      InfoFoncTitreNomProprietaire,
      InfoFoncTitreAffectation,
      InfoFoncTitreCin,
      InfoFoncTitreCoordonneGPSX,
      InfoFoncTitreCoordonneGPSY,
    } = req.body;

    const newTitre = new Titre({
      InfoFoncTitreCISJ,
      InfoFoncTitreNomPropiete,
      InfoFoncTitreNumTitre,
      InfoFoncTitreSurface,
      InfoFoncTitreNomProprietaire,
      InfoFoncTitreAffectation,
      InfoFoncTitreCin,
      InfoFoncTitreCoordonneGPSX,
      InfoFoncTitreCoordonneGPSY,
    });

    try {
      const titre = await newTitre.save();
      res.status(201).send(titre);
    } catch (err) {
      res.status(404).send("something went wrong");
      console.log({ err });
    }
  };

  /**
   * @route PUT api/infoFonc/:id/assign
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
}

module.exports = TitreController;
