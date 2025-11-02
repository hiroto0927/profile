import fs from "fs-extra";
import Parser from "rss-parser";
import { ZennArticle } from "@/types/blog";

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
  guid?: string;
};

const ZENN_USERNAME = "hirohiroeng";
const ZENN_RSS_URL = `https://zenn.dev/${ZENN_USERNAME}/feed`;

function isValidUrl(str: string): boolean {
  try {
    const { protocol } = new URL(str);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

const parser = new Parser();

async function fetchZennFeedItems(): Promise<FeedItem[]> {
  try {
    console.log(`📡 Fetching RSS feed from: ${ZENN_RSS_URL}`);
    const feed = await parser.parseURL(ZENN_RSS_URL);
    
    if (!feed?.items?.length) {
      console.log("⚠️ No items found in RSS feed");
      return [];
    }

    console.log(`✅ Found ${feed.items.length} items in RSS feed`);

    // return item which has title and link
    return feed.items
      .map(({ title, contentSnippet, link, isoDate, guid }) => {
        return {
          title: title || "",
          contentSnippet: contentSnippet?.replace(/\n/g, "") || "",
          link: link || "",
          isoDate: isoDate || "",
          dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
          guid: guid || "",
        };
      })
      .filter(
        ({ title, link }) => title && link && isValidUrl(link)
      ) as FeedItem[];
  } catch (error) {
    console.error("❌ Error fetching Zenn RSS feed:", error);
    return [];
  }
}

function convertFeedItemToZennArticle(item: FeedItem): ZennArticle {
  // RSS feedから取得できる情報は限定的なので、基本的な情報のみ設定
  const slug = item.link.split("/").pop() || "";
  const id = item.guid || slug;
  
  return {
    id,
    title: item.title,
    emoji: "📝", // デフォルト絵文字
    type: "tech" as const,
    topics: [], // RSSからは取得できないため空配列
    published: true,
    slug,
    content: item.contentSnippet || "",
    link: item.link, // RSS feedから取得したリンクを保存
    published_at: item.isoDate || new Date().toISOString(),
    created_at: item.isoDate || new Date().toISOString(),
    updated_at: item.isoDate || new Date().toISOString(),
    likes_count: 0, // RSSからは取得できないため0
    comments_count: 0, // RSSからは取得できないため0
    reading_time: Math.ceil((item.contentSnippet?.length || 0) / 400), // 概算読了時間
    user: {
      username: ZENN_USERNAME,
      name: "Hiroto",
      avatar_url: "https://github.com/hiroto0927.png", // GitHubアバターを使用
    },
  };
}

(async function buildZennArticles() {
  try {
    console.log("🚀 Starting Zenn articles build process...");
    
    const feedItems = await fetchZennFeedItems();
    
    if (feedItems.length === 0) {
      console.log("⚠️ No feed items to process");
      return;
    }

    // Convert feed items to ZennArticle format
    const articles: ZennArticle[] = feedItems.map(convertFeedItemToZennArticle);
    
    // Sort by published date (newest first)
    articles.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

    // Ensure output directory exists
    const outputDir = ".contents";
    fs.ensureDirSync(outputDir);

    // Write articles to JSON file
    const outputPath = `${outputDir}/zenn-articles.json`;
    fs.writeJsonSync(outputPath, articles, { spaces: 2 });

    console.log(`✅ Successfully built ${articles.length} Zenn articles`);
    console.log(`📁 Articles saved to: ${outputPath}`);
    
    // Log first few articles for debugging
    articles.slice(0, 3).forEach((article, index) => {
      console.log(`${index + 1}. ${article.title} (${article.published_at})`);
    });
    
  } catch (error) {
    console.error("❌ Error in build process:", error);
    process.exit(1);
  }
})();