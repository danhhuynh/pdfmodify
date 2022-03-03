import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var DocumentMafc = new Schema(
  {
    lead_id: String,
    name: String,
    code: String,
    require: Boolean,
    file_path: [String],
    updated_by: String,
    pdf_path: String,
  },
  {
    timestamps: { updatedAt: "updated_at" },
  }
);

export default mongoose.model("DocumentMafc", DocumentMafc);
