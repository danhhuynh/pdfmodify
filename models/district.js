import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var District = new Schema({
  city_id: String,
  district_id: String,
  name: String,
});

export default mongoose.model("District", District);
