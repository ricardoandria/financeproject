const mongoose = require("mongoose");

const infoFonciereCadasteSchema = mongoose.Schema({
  InfoFoncCadastreNomProprietaire: {
    type: String,
    required: true,
  },
  InfoFoncCadastreNomLieuVillage: {
    type: String,
    required: true,
  },
  InfoFoncCadastreNumParcelle: {
    type: String,
    required: true,
  },
  InfoFoncCadastreSurface: {
    type: String,
    required: true,
  },
  InfoFoncCadastreSection: {
    type: String,
    required: true,
  },
  InfoFoncCadastreRegistre: {
    type: String,
    required: true,
  },
  InfoFoncCadastreNumFolio: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Cadastre", infoFonciereCadasteSchema);
