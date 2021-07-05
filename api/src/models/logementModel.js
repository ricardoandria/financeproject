const mongoose = require("mongoose");

const logementSchema = new mongoose.Schema(
  {
    typeBatiment: {
      type: String,
      required: true,
    },
    ministere: {
      type: String,
      required: true,
    },
    typeLogement: {
      type: String,
      required: true,
    },
    localisation: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    nomHotel: {
      type: String,
      required: true,
    },
    fokotany: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fokotany",
    },
    isAttributed: {
      type: Boolean,
      default: false,
    },
    enceinteLieuTravail: {
      type: Boolean,
      required: true,
      default: false,
    },
    titreCISJ: {
      type: String,
      required: true,
    },
    titreNomPropiete: {
      type: String,
      required: true,
    },
    titreNumTitre: {
      type: String,
      required: true,
    },
    titreSurface: {
      type: String,
      required: true,
    },
    titreNomProprietaire: {
      type: String,
      required: true,
    },
    titreAffectation: {
      type: Boolean,
      required: true,
      default: false,
    },
    titreCin: {
      type: String,
      required: true,
    },
    titreCoordonneGPSX: {
      type: String,
      required: true,
    },
    titreCoordonneGPSY: {
      type: String,
      required: true,
    },
    infoTechLogDateSaisie: {
      type: Date,
      required: true,
    },
    infoTechLogSurfaceBatieLong: {
      type: String,
      required: true,
    },
    infoTechLogSurfaceBatieLarg: {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Logement", logementSchema);
