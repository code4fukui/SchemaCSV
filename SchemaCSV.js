import { CSV } from "https://js.sabae.cc/CSV.js";

export const SchemaCSV = {};

const SCHEMA = "http://json-schema.org/draft-07/schema#";

SchemaCSV.toSchema = async (csvfn) => {
  const title = csvfn.substring(csvfn.lastIndexOf("/") + 1, csvfn.lastIndexOf(".schema.csv"));
  const data = CSV.toJSON(await CSV.fetch(csvfn));
  const sc = {
    "$schema": SCHEMA,
    title,
    type: "object", // or array?
  };
  let parent = sc;
  const prop = sc.properties = {};
  for (const d of data) {
    const path = d.name.split(".");
    let cur = prop;
    parent = sc;
    for (let i = 0; i < path.length - 1; i++) {
      const p = prop[path[i]];
      if (!p) {
        throw new Error("must set parent");
      } else {
        cur = p.properties || p.items.properties;
        parent = p.properties ? p : p.items;
      }
    }
    const name = path[path.length - 1];
    const t = {
      type: d.type.replace(/\?/g, ""),
      example: d.example,
      description: d.description,
    };
    if (!d.type.endsWith("?")) {
      if (!parent.required) {
        parent.required = [];
      }
      parent.required.push(name);
    }
    if (d.type.startsWith("array")) {
      t.items = { type: "object", properties: {} };
    } else if (d.type.startsWith("object")) {
      t.properties = {};
    }
    cur[name] = t;
  }
  return sc;
};
