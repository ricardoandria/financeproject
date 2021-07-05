const mongoose = require("mongoose");

const infoUtilCarSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
  },
  fonction: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CarUtilisateur", infoUtilCarSchema);
