import { SchemaCSV } from "../SchemaCSV.js";
import { JSONSchema } from "https://code4fukui.github.io/JSONSchema/JSONSchema.js";

const schema = await SchemaCSV.fromCSVFile("./NewCollege.schema.csv");
await Deno.writeTextFile("./NewCollege.schema.json", JSON.stringify(schema, null, 2));
console.log(schema);

const dts = JSONSchema.toDTS(schema);
await Deno.writeTextFile("./NewCollege.d.ts", dts);

const json = JSONSchema.getExample(schema);
await Deno.writeTextFile("./NewCollege.example.json", JSON.stringify(json, null, 2));
