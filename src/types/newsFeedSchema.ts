// Common types shared across different post types
type Format = "compact" | "featured" | "wide";
type Category = 
  | "Food & Culture" 
  | "Technology" 
  | "Nature" 
  | "Science" 
  | "Design" 
  | "Entertainment" 
  | "History" 
  | "Health" 
  | "Food & Dining" 
  | "Arts & Culture";

// Base interface for all news posts
export interface BaseNewsPost {
  id: string;
  type: string;
  format: Format;
  title: string;
  subtitle?: string;
  category: Category;
  author: {
    name: string;
    avatar: string;
  };
  timestamp?: string;
  badge?: {
    text: string,
    type: "urgent"
  }
}

// Standard post with single image
export interface StandardPost extends BaseNewsPost {
  type: "article" | "video" | "podcast" | "interactive";
  imageUrl: string;
}

// Gallery post with multiple images
export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  photographer: string;
}

export interface GalleryPost extends BaseNewsPost {
  type: "gallery";
  images: GalleryImage[];
}

// Livestream post
export interface LivestreamPost extends BaseNewsPost {
  type: "livestream";
  imageUrl: string;
  streamStatus: "live" | "ended" | "scheduled";
  viewerCount: number;
  startedAt: string; // ISO 8601 date string
  estimatedDuration: string; // Duration in minutes
}

// Union type for all possible post types
export type NewsPost = StandardPost | GalleryPost | LivestreamPost;

// Type for the entire newsfeed array
export type NewsFeed = NewsPost[];

// Optional: Type guard functions for type checking
export const isGalleryPost = (post: NewsPost): post is GalleryPost => {
  return post.type === "gallery";
};

export const isLivestreamPost = (post: NewsPost): post is LivestreamPost => {
  return post.type === "livestream";
};