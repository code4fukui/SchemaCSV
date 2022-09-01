import { CSV } from "https://js.sabae.cc/CSV.js";
import { json2schema } from "https://code4fukui.github.io/JSONSchema/json2schema.js";

export const SchemaCSV = {};

SchemaCSV.fromCSVFile = async (csvfn) => {
  const title = csvfn.substring(csvfn.lastIndexOf("/") + 1, csvfn.lastIndexOf(".schema.csv"));
  return SchemaCSV.fromCSV(await CSV.fetch(csvfn), title);
};

SchemaCSV.fromCSVText = async (csvtxt, title) => {
  return SchemaCSV.fromCSV(CSV.decode(csvtxt), title);
};

SchemaCSV.fromCSV = async (csv, title) => {
  if (!Array.isArray(csv)) {
    throw new Error("csv is not array!");
  }
  const data = CSV.toJSON(csv);
  return json2schema(data);
};
