import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var Scheme = new Schema(
  { schemegroup: String },
  {
    strict: false,
  }
);

export default mongoose.model("Scheme", Scheme);
