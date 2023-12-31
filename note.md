## 実行したコード / 作成したファイル
```
# 該当のフォルダに cd で移動してインストール → 作成したフォルダに移動 → next.jsのバージョンを 13.2.4 に合わせる
  % npx create-next-app google-clone
  % cd google-clone
  % npm i next@13.2.4


# プロジェクト直下に .prettierrc というファイルを作成し、その中に以下を記述↓
  {
    "singleQuote": true,
    "semi": false
  }


# プロジェクト直下にある next.config.js を開き、以下を追記 (バージョンが 13.4以上の場合は、app routerの安定版に更新されている為設定は不要)
warn  - You have enabled experimental feature (appDir) in next.config.js.
warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
というエラーがコンソールに出るが、無視してOK。↓
  const nextConfig = {
    // 以下を追記
    experimental: {
      appDir: true,
    },
  }

  module.exports = nextConfig


# react-icons をインストール
  % npm install react-icons --save


# app/page.tsx にて wikipedia から取得する画像を使うため、next/image の設定を next.config.js に追記↓
  experimental: {
    appDir: true,
  },
  // 以下を追記
  images: {
    domains: ["upload.wikimedia.org"],    // 画像を使用する許可されたホスト名を配列で指定
  },


# next/themes の設定
  1. % npm install next-themes で、next/themes をインストール
  2. tailwind.config.ts に darkMode: 'class', を追記
  3. app直下に Providers.tsx ファイルを作る。(ファイル参照)
  4. app/layout.tsx の <body/>タグ以下を <Providers />で囲む (import Providers from "./Providers";)
  5. components/DarkModeSwitch.tsx にて、useTheme を import して設定


# html-react-parser をインストール (ブラウザに表示されるHTMLをReactで扱えるようにする)
  1. % npm install html-react-parser --save
  2. 使用するコンポーネントの上部に import parse from "html-react-parser"; を追記
  3. parse(HTML) で、HTMLをReactで扱えるようにする (例: {Parse(item.htmlSnippet)})
```