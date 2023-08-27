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
    /* 以下を追記 */
    experimental: {
      appDir: true,
    },
  }

  module.exports = nextConfig


# react-icons をインストール
  % npm install react-icons --save

```