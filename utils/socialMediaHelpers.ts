import { siteConfig } from "@/config/siteConfig";

export interface SocialPost {
  message: string;
  image?: string;
  link?: string;
  hashtags?: string[];
}

/**
 * Format a message for social media with hashtags and link
 */
export function formatSocialMessage(post: SocialPost, defaultUrl?: string): string {
  const url = post.link || defaultUrl || siteConfig.site.url;
  const hashtags = post.hashtags?.join(" ") || "";
  return [post.message, hashtags, url].filter(Boolean).join("\n\n");
}

/**
 * Format a message with character limit (e.g., for Twitter)
 */
export function formatSocialMessageWithLimit(
  post: SocialPost, 
  maxLength: number, 
  defaultUrl?: string
): string {
  const message = formatSocialMessage(post, defaultUrl);
  return message.length > maxLength ? message.substring(0, maxLength - 3) + "..." : message;
}
