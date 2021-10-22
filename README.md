# 株式会社ゆめみ様 技術課題

## 概要
[RESAS API](https://opendata.resas-portal.go.jp/)を用いて都道府県別の総人口推移グラフを表示するSPAを構築しました。
ホスティングはVercelで行っています。実際の成果物は[こちら]()。

## 見た目
### モバイル
<img width="1440" alt="Screen Shot 2021-10-22 at 14 51 22" src="https://user-images.githubusercontent.com/51704330/138401723-e15e724a-8271-4ebe-9cc9-e7df3f472059.png">

### PC
<img width="1440" alt="Screen Shot 2021-10-22 at 14 51 13" src="https://user-images.githubusercontent.com/51704330/138401711-1a8a4eac-4196-41b6-be3c-3f604de73b3b.png">


## Getting Started
プロジェクトのルートに`.env.local`ファイルを配置し、`NEXT_PUBLIC_RESAS_API_KEY`という環境変数にRESAS API KEYを代入してください。

例
```bash 
NEXT_PUBLIC_RESAS_API_KEY=000your111api222key333

```
その後、以下のコマンドでプロジェクトを立ち上げることができます。

```bash
yarn install

yarn dev
```

## 使用ライブラリ等
- Next.js
- TypeScript
- Highcharts React
- react-loader-spinner
- story-books
- axios
- SWR
- Prettier
- ESLint

