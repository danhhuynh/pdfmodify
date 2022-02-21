import mongoose from "mongoose";
var Schema = mongoose.Schema;
mongoose.pluralize(null);
var CustomerSchema = new Schema(
  {
    name: { type: String, required: true },
    cccd: { type: String, required: true, unique: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false,
  }
);
// CustomerSchema.plugin(mongoose_delete, { deletedAt: true });
// CustomerSchema.pre("find", function () {
//   this.where({ deleted: null });
// });
// CustomerSchema.pre("findOne", function () {
//   this.where({ deleted: null });
// });
// CustomerSchema.pre("findById", function () {
//   this.where({ deleted: null });
// });
export default mongoose.model("Customer", CustomerSchema);
