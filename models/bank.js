import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var Bank = new Schema({
  bankid: String,
  bankdesc: String,
});

export default mongoose.model("Bank", Bank);
