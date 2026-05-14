# SchemaCSV

CSV形式で記述されたスキーマから[JSON Schema](https://json-schema.org/)に変換するための、[Deno](https://deno.land)向けESモジュールです。

## デモ
`demo`ディレクトリには以下のサンプルファイルが含まれています:
- `NewCollege.schema.csv`: CSV形式のスキーマファイル。
- `NewCollege.schema.json`: 生成されたJSON Schemaファイル。
- `NewCollege.d.ts`: 生成されたTypeScript型定義ファイル。
- `NewCollege.example.json`: スキーマに基づいて検証されたサンプルJSONデータ。

## 機能
- CSV形式のスキーマをJSON Schemaに変換します。
- JSON SchemaからTypeScriptの型定義を生成します。
- Denoでの使用例を提供します。

## 要件
本プロジェクトの実行には[Deno](https://deno.land)が必要です。

## 使い方
```javascript
import { SchemaCSV } from "https://github.com/code4fukui/SchemaCSV";

const schema = await SchemaCSV.fromCSVFile("./NewCollege.schema.csv");
await Deno.writeTextFile("./NewCollege.schema.json", JSON.stringify(schema, null, 2));
console.log(schema);
```

## データ / API
本プロジェクトは、JSON SchemaおよびTypeScriptの型定義を生成するために[JSONSchema.js](https://github.com/code4fukui/JSONSchema)ライブラリを使用しています。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
