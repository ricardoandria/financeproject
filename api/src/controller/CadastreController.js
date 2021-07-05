const Cadastre = require("../models/informationFonciereCadastreModel");
const { Request, Response } = require("express");

class CadastreController {
  /**
   * @route POST api/infoFonc/create
   * @param {Request} req
   * @param {Response} res
   */

  create = async (req, res) => {
    const {
      InfoFoncCadastreNomProprietaire,
      InfoFoncCadastreNomLieuVillage,
      InfoFoncCadastreNumParcelle,
      InfoFoncCadastreSurface,
      InfoFoncCadastreSection,
      InfoFoncCadastreRegistre,
      InfoFoncCadastreNumFolio,
    } = req.body;

    const newCadastre = new Cadastre({
      InfoFoncCadastreNomProprietaire,
      InfoFoncCadastreNomLieuVillage,
      InfoFoncCadastreNumParcelle,
      InfoFoncCadastreSurface,
      InfoFoncCadastreSection,
      InfoFoncCadastreRegistre,
      InfoFoncCadastreNumFolio,
    });

    try {
      const cadastre = await newCadastre.save();
      res.status(201).send(cadastre);
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

module.exports = CadastreController;
