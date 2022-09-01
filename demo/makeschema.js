import { SchemaCSV } from "../SchemaCSV.js";

const d = await SchemaCSV.toSchema("./NewCollege.schema.csv");
await Deno.writeTextFile("./NewCollege.schema.json", JSON.stringify(d, null, 2));
console.log(d);
