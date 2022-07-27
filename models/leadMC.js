import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.pluralize(null);
import "./customer.js";

const LeadMCSchema = new Schema(
  {
    locked: Boolean,
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false,
  }
);

export default mongoose.model("LeadMC", LeadMCSchema);
