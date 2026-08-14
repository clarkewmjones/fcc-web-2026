const FEED_URL = "https://reachingforth.blogspot.com/feeds/posts/default?alt=json&max-results=4";

export type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

// Fallback used only if the Blogger feed is unreachable (e.g. at build time).
const FALLBACK_POSTS: BlogPost[] = [
  {
    title: "Questions Asked by the Oxford Holy Club",
    date: "April 2026",
    excerpt: "John and Charles Wesley, George Whitefield, and their friends met at Oxford University.",
    url: "https://reachingforth.blogspot.com/2026/04/questions-asked-by-oxford-holy-club.html",
  },
];

const MINOR_WORDS = new Set([
  "a", "an", "and", "at", "but", "by", "for", "in", "nor",
  "of", "on", "or", "the", "to", "up", "yet", "so",
]);

function toTitleCase(raw: string): string {
  const words = raw.toLowerCase().split(" ");
  return words
    .map((word, i) => {
      if (/\d/.test(word)) return word.toUpperCase();
      if (i !== 0 && i !== words.length - 1 && MINOR_WORDS.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function htmlToExcerpt(html: string, maxLength = 150): string {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace)}...`;
}

type BloggerEntry = {
  title: { $t: string };
  published: { $t: string };
  content?: { $t: string };
  summary?: { $t: string };
  link: { rel: string; href: string }[];
};

export async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_POSTS;

    const data = await res.json();
    const entries: BloggerEntry[] = data.feed?.entry ?? [];

    const posts = entries.map((entry) => {
      const altLink = entry.link.find((l) => l.rel === "alternate");
      const published = new Date(entry.published.$t);

      return {
        title: toTitleCase(entry.title.$t),
        date: new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(published),
        excerpt: htmlToExcerpt(entry.content?.$t ?? entry.summary?.$t ?? ""),
        url: altLink?.href ?? "https://reachingforth.blogspot.com",
      };
    });

    return posts.length > 0 ? posts : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}
