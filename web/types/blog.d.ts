export interface BlogArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnailUrl?: string;
}

export interface RssFeed {
  site: "zenn";
  isDisplay: boolean;
  url: string;
}

// XML2JS パース結果の型定義
export interface RssEnclosure {
  $: {
    url: string;
    type?: string;
    length?: string;
  };
}

export interface RssItem {
  title: string[];
  link: string[];
  description: string[];
  pubDate: string[];
  enclosure?: RssEnclosure[];
}

export interface RssChannel {
  item: RssItem[];
}

export interface RssResult {
  rss: {
    channel: RssChannel[];
  };
}
