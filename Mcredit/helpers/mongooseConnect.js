import { createRequire } from "module";
const require = createRequire(import.meta.url);
var mongoose = require("mongoose");
require("dotenv").config();
import LeadMC from "../../models/leadMC.js";

mongoose.connect(
  "mongodb://admin:whatisyourpassword@127.0.0.1:27017/main?authSource=admin"
);

const getLeadMC = new Promise((resolve) => {
  LeadMC.find({ _id: "62bafdeb1c80a58df5799dbc" })
    .populate("customer")
    .lean()
    .exec((err, lead) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(lead);
    });
}).catch((err) => console.log(err));

export const listInfoCustomer = async () => {
  const list = await getLeadMC;
  return list;
};
