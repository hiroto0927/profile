# Tech Blog ページ

本ページは、訪れたユーザーが Hiroto Desu. の技術ブログ記事を閲覧できるページである。

本ページは、以下で構成される。

1. ヘッダー
2. メインコンテンツ
3. フッター

## ヘッダー

ヘッダーには、ホーム画面と同様に、サイトロゴとナビゲーションメニューを含むこと。

## メインコンテンツ

Tech Blog ページには、外部のブログ記事を埋め込み表示すること。下記の技術ブログサイトを埋め込み対象とする。

1. zenn (https://zenn.dev/hirohiroeng)
2. そのほかの技術ブログサイト※ 将来的に追加可能だが今回はスコープ外とするため、対応しないものとする。

### 埋め込み記事について

#### zenn の記事埋め込み

zenn の記事は、RSS フィードを利用して取得し、Tech Blog ページに`card`形式で表示すること。RSS フィードの URL は、以下の通りとする。
対象 URL：`https://zenn.dev/hirohiroeng/feed`

表示する項目は、`rss -> channel -> item` の各タグに含まれる情報を利用する。

**PC、タブレット**

3 列表示とし、表示項目は以下の通りとする。

- `title`タグに含まれる記事タイトル
- `link` タグに含まれる記事 URL へのリンク
- `description` タグに含まれる記事の説明文
- `pubDate` タグに含まれる記事の公開日
- `enclosure` タグに含まれるサムネイル画像

**モバイル**

2 列表示とし、表示項目は以下の通りとする。

- `pubDate` タグに含まれる記事の公開日
- `enclosure` タグに含まれるサムネイル画像
- `link` タグに含まれる記事 URL へのリンク

### 記事の埋め込み方法について

`src/config/rss-feeds.config.ts` に、RSS フィードの URL を追加し、`npm run build`時に対象 URL の RSS フィールド情報を取得して Tech Blog ページに表示すること。 下記に、`rss-feeds.config.ts` のサンプルコードを示す。

```typescript
type RssFeed = {
  site: "zenn"; // 将来的に他のブログサイトを追加する場合に備え、type を定義
  isDisplay: boolean; // 表示・非表示の切り替え
  url: string; // RSS フィードの URL
};

export const rssFeeds = [
  {
    isDisplay: true,
    url: "https://zenn.dev/hirohiroeng/feed",
  },
];
```

## フッター

フッターには、ホーム画面と同様に、著作権表示とナビゲーションメニューを含むこと。
