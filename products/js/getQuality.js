import { params } from "./variable.js";

import { fechAPI } from "./fecthAPI.js";
const data = await fechAPI(" http://localhost:3000/products")
params.quality = data.length;
