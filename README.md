# SchemaCSV

- A ES module for [Deno](https://deno.land) to convert to [JSON Schema](https://json-schema.org/) from the schema as CSV
- CSVで記述したスキーマを、[JSON Schema](https://json-schema.org/)に変換する[Deno](https://deno.land)用ESモジュール

![ogp-jpg](https://user-images.githubusercontent.com/1715217/188025087-52cd4118-fd94-4323-b457-618458f69561.jpg)

```JavaScript
import { SchemaCSV } from "https://code4fukui.github.io/SchemaCSV/SchemaCSV.js";

const schema = await SchemaCSV.fromCSVFile("./NewCollege.schema.csv");
await Deno.writeTextFile("./NewCollege.schema.json", JSON.stringify(schema, null, 2));
console.log(schema);
```

## Spec

- name - with '.' for the hierarchical structure
- type - string | number | integer | boolean | array | object | null, [type of JSON Scheam](https://json-schema.org/understanding-json-schema/reference/type.html), ends with '?' for not required
- example
- description

## Dependency

- [JSONSchema.js](https://github.com/code4fukui/JSONSchema)
