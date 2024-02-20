// File2.js
import { total as total1 } from "index.js";
import { total as total2 } from "index_si.js";

let tot1 = total1 + total2;
document.getElementById("payable").innerHTML = tot1;
