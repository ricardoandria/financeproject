const Vehicule = require("../models/vehiculeModel");
const { Request, Response } = require("express");

class VehiculeController {
  /**
   * @route POST api/vehicule/create
   * @param {Request} req
   * @param {Response} res
   */

  create = async (req, res) => {
    const {
      immatriculationProvisoire,
      immatriculationProvisoire2,
      attribue,
      marque,
      type,
      serieDuType,
      autresType,
      genre,
      puissanceadmin,
      carrosserie,
      numMoteur,
      sourceEnergie,
      datePremiereMise,
      dateImmatriculationPrecedente,
      categorieUtilisation,
      nomResponsable,
      fonctionDetenteur,
      ministere,
      directionGenerale,
      provinces,
      region,
    } = req.body;

    const newVehicule = new Vehicule({
      immatriculationProvisoire,
      immatriculationProvisoire2,
      attribue,
      marque,
      type,
      serieDuType,
      autresType,
      genre,
      puissanceadmin,
      carrosserie,
      numMoteur,
      etatVehicule,
      sourceEnergie,
      datePremiereMise,
      dateImmatriculationPrecedente,
      categorieUtilisation,
      nomResponsable,
      fonctionDetenteur,
      ministere,
      directionGenerale,
      provinces,
      region,
    });

    try {
      const vehicule = await newVehicule.save();
      res.status(201).send(vehicule);
    } catch (err) {
      res.status(404).send("something went wrong");
      console.log({ err });
    }
  };

  /**
   *
   * @route GET api/vehicule/fetch
   * @param {Response} res
   */

  fetch = async (_, res) => {
    try {
      const vehicule = await Vehicule.find();
      res.status(200).send(vehicule);
    } catch (err) {
      res.status(404).send("Something wrong");
      console.log({ err });
    }
  };
  /**
   * @route PUT api/vehicule/:id/assign
   * @param {Request} req
   * @param {Response} res
   */
  assign = async (req, res) => {
    const { id } = req.params;
    try {
      await Vehicule.findByIdAndUpdate(
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

module.exports = VehiculeController;
