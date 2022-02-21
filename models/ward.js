import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var Ward = new Schema({
  city: String,
  zipdesc: String,
  zipcode: String,
});

export default mongoose.model("Ward", Ward);
