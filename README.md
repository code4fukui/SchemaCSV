# SchemaCSV

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A ES module for [Deno](https://deno.land) to convert [JSON Schema](https://json-schema.org/) from a schema described in CSV format.

## Demo
The demo directory contains example files:
- `NewCollege.schema.csv`: The CSV schema file.
- `NewCollege.schema.json`: The generated JSON Schema file.
- `NewCollege.d.ts`: The generated TypeScript definition file.
- `NewCollege.example.json`: An example JSON data validated against the schema.

## Features
- Convert a CSV-formatted schema to a JSON Schema.
- Generate TypeScript definitions from the JSON Schema.
- Example usage in Deno.

## Requirements
This project requires [Deno](https://deno.land) to run.

## Usage
```javascript
import { SchemaCSV } from "https://github.com/code4fukui/SchemaCSV";

const schema = await SchemaCSV.fromCSVFile("./NewCollege.schema.csv");
await Deno.writeTextFile("./NewCollege.schema.json", JSON.stringify(schema, null, 2));
console.log(schema);
```

## Data / API
This project uses the [JSONSchema.js](https://github.com/code4fukui/JSONSchema) library to generate the JSON Schema and TypeScript definitions.

## License
MIT License — see [LICENSE](LICENSE).