import * as t from "https://deno.land/std/testing/asserts.ts";
import { validate } from "https://code4fukui.github.io/jsonschema-es/lib/index.js";
import { SchemaCSV } from "./SchemaCSV.js";
import { schema2dts } from "https://code4fukui.github.io/JSONSchema/schema2dts.js";

Deno.test("simple", async () => {
  const sc = await SchemaCSV.fromCSVFile("./demo/NewCollege.schema.csv");
  const url = "https://codeforkosen.github.io/newcollege/newcollege202208.json";
  const d = (await (await fetch(url)).json())[0];
  //console.log(d);
  ["開設予定大学等", "開設予定年度", "入学定員"].forEach(name => d[name] = parseInt(d[name]));
  const res = validate(d, sc);
  //console.log(res)
  t.assertEquals(res.errors.length, 0);
  const dts = schema2dts(sc);
  console.log(dts);
});
