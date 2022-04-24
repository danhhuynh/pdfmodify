import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var Tsa = new Schema({
  inspectorname: String,
  inspectorid: String,
});

export default mongoose.model("TsaMafc", Tsa);
