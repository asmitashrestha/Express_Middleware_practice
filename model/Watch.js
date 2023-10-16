const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AsmitaSchema = new Schema({
  
});

module.exports = mongoose.model("Asmita",AsmitaSchema)