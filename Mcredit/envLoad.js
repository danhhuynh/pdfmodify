import { createRequire } from "module";
const require = createRequire(import.meta.url);
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
