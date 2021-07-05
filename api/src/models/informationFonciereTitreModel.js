const mongoose = require("mongoose");

const infoFonciereTitreSchema = new mongoose.Schema({
  InfoFoncTitreCISJ: {
    type: String,
    required: true,
  },
  InfoFoncTitreNomPropiete: {
    type: String,
    required: true,
  },
  InfoFoncTitreNumTitre: {
    type: String,
    required: true,
  },
  InfoFoncTitreSurface: {
    type: String,
    required: true,
  },
  InfoFoncTitreNomProprietaire: {
    type: String,
    required: true,
  },
  InfoFoncTitreAffectation: {
    type: Boolean,
    required: true,
    default: false,
  },
  InfoFoncTitreCin: {
    type: String,
    required: true,
  },
  InfoFoncTitreCoordonneGPSX: {
    type: String,
    required: true,
  },
  InfoFoncTitreCoordonneGPSY: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Titre", infoFonciereTitreSchema);
