const mongoose = require("mongoose");

const infoTechLogSchema = new mongoose.Schema({
  infoTechLogDateSaisie: {
    type: Date,
    required: true,
  },
  infoTechLogSurfaceBatie: {
    type: String,
    required: true,
  },
  infoTechLogCloture: {
    type: String,
    required: true,
  },
  infoTechLogPortailPrincipal: {
    type: String,
    required: true,
    default: false,
  },
  infoTechLogCour: {
    type: String,
    required: true,
  },
  infoTechLogParking: {
    type: String,
    required: true,
  },
  infoTechLogJardin: {
    type: String,
    required: true,
  },
  infoTechLogAnneDeConstruction: {
    type: Date,
    required: true,
  },
  infoTechLogTypesMateriauxConstruction: {
    type: String,
    required: true,
  },
  infoTechLogTypeDeToiture: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "InformationTechniqueLogement",
  infoTechLogSchema
);
