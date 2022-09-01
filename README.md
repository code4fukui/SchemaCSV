# SchemaCSV

- A ES module to convert to [JSON Schema](https://json-schema.org/) from the schema as CSV
- CSVで記述したスキーマを、[JSON Schema](https://json-schema.org/)に変換するモジュール

![ogp-jpg](https://user-images.githubusercontent.com/1715217/188025087-52cd4118-fd94-4323-b457-618458f69561.jpg)

```JavaScript
import { SchemaCSV } from "https://code4fukui.github.io/SchemaCSV/SchemaCSV.js";

const schema = await SchemaCSV.fromCSVFile("./NewCollege.schema.csv");
await Deno.writeTextFile("./NewCollege.schema.json", JSON.stringify(schema, null, 2));
console.log(schema);
```
