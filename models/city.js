import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var City = new Schema({
  stateid: String,
  statedesc: String,
});

export default mongoose.model("City", City);
