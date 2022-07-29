import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
import "./customer.js";

var MySchema = new Schema(
  {
    locked: Boolean,
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false,
  }
);

export default mongoose.model("LeadMC", MySchema);
