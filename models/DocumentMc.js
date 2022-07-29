import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
import "./customer.js";

var MySchema = new Schema(
  {
    lead_id: String,
    name: String,
    code: String,
    group_id: String,
    group_name: String,
    require: Boolean,
    mandatory: Boolean,
    file_path: [String],
    updated_by: String,
    file_type: String,
    version: String,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export default mongoose.model("DocumentMC", MySchema);
