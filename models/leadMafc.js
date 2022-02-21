import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.pluralize(null);
var LeadMafcSchema = new Schema(
  {
    customer_id: { type: String, required: true, unique: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false,
  }
);

export default mongoose.model("LeadMafc", LeadMafcSchema);
