import { parseString } from "xml2js";
import { BlogArticle, RssResult, RssItem } from "../../types/blog";

export async function parseRssFeed(url: string): Promise<BlogArticle[]> {
  try {
    const response = await fetch(url);
    const rssText = await response.text();

    return new Promise((resolve, reject) => {
      parseString(rssText, (err, result: RssResult) => {
        if (err) {
          reject(err);
          return;
        }

        const articles: BlogArticle[] = [];
        const items = result?.rss?.channel?.[0]?.item || [];

        items.forEach((item: RssItem) => {
          const title = item.title?.[0] || "";
          const link = item.link?.[0] || "";
          const description = item.description?.[0] || "";
          const pubDate = item.pubDate?.[0] || "";
          const enclosure = item.enclosure?.[0];
          const thumbnailUrl = enclosure?.$?.url || undefined;

          if (title && link) {
            articles.push({
              title,
              link,
              description,
              pubDate,
              thumbnailUrl,
            });
          }
        });

        resolve(articles);
      });
    });
  } catch (error) {
    console.error("RSS feed parsing error:", error);
    return [];
  }
}
