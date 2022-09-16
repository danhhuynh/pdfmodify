import { createRequire } from "module";
import { STATUS } from "../../config/constant.js";
import DocumentMc from "../../models/DocumentMc.js";
import LeadMC from "../../models/LeadMC.js";
const require = createRequire(import.meta.url);
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

export const getLeadRender = () =>
  LeadMC.find({ status_render: STATUS.RENDER_ACCA_MC_CARD, updated_at: { $lte: new Date(Date.now() - 1000 * 60 * 3) } })
    .populate("customer")
    .lean();

export const updateLead = async (query, updates) =>
  LeadMC.updateOne(query, updates);

export const updateDocumentPath = async (_id, version, file_name) =>
  DocumentMc.updateOne(
    {
      lead_id: _id.toString(),
      code: "CustomerInformationSheet",
      version: version,
    },
    { file_path: [file_name] }
  );
