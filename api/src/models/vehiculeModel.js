const mongoose = require("mongoose");

const vehiculeSchema = new mongoose.Schema({
  immatriculationProvisoire: {
    type: String,
    required: true,
  },
  immatriculationProvisoire2: {
    type: String,
    required: true,
  },
  attribue: {
    type: String,
    required: true,
  },
  marque: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  serieDuType: {
    type: String,
    required: true,
  },
  autresType: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  puissanceadmin: {
    type: String,
    required: true,
  },
  carrosserie: {
    type: String,
    required: true,
  },
  numMoteur: {
    type: String,
    required: true,
  },
  etatVehicule: {
    type: String,
    required: true,
  },
  sourceEnergie: {
    type: String,
    required: true,
  },
  datePremiereMise: {
    type: String,
    required: true,
  },
  dateImmatriculationPrecedente: {
    type: String,
    required: true,
  },
  categorieUtilisation: {
    type: String,
    required: true,
  },
  nomResponsable: {
    type: String,
    required: true,
  },
  fonctionDetenteur: {
    type: String,
    required: true,
  },
  ministere: {
    type: String,
    required: true,
  },
  directionGenerale: {
    type: String,
    required: true,
  },
  provinces: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("vehicule", vehiculeSchema);
