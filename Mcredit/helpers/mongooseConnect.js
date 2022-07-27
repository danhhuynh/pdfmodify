import { createRequire } from "module";
import { STATUS } from "../../config/constant.js";
import LeadMC from "../../models/leadMC.js";
const require = createRequire(import.meta.url);
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

export const getLeadRender = () =>
  LeadMC.find({ status_render: STATUS.RENDER_ACCA_MC_CARD })
    .populate("customer")
    .lean();
