import { siteConfig } from "@/config/siteConfig";

export interface SocialPost {
  message: string;
  image?: string;
  link?: string;
  hashtags?: string[];
}

/**
 * Format hashtags for social media posts
 */
function formatHashtags(hashtags?: string[]): string {
  return hashtags?.length ? hashtags.join(" ") : "";
}

/**
 * Format a message for social media with hashtags and link
 */
export function formatSocialMessage(post: SocialPost, defaultUrl?: string): string {
  const url = post.link || defaultUrl || siteConfig.site.url;
  const hashtags = formatHashtags(post.hashtags);
  return [post.message, hashtags, url].filter(part => part && part.trim()).join("\n\n");
}

/**
 * Format a message with character limit (e.g., for Twitter)
 */
export function formatSocialMessageWithLimit(
  post: SocialPost, 
  maxLength: number, 
  defaultUrl?: string
): string {
  const ELLIPSIS = "...";
  const message = formatSocialMessage(post, defaultUrl);
  return message.length > maxLength 
    ? message.substring(0, maxLength - ELLIPSIS.length) + ELLIPSIS 
    : message;
}

/**
 * Format Instagram caption (Instagram doesn't support clickable links in captions)
 */
export function formatInstagramCaption(post: SocialPost): string {
  const hashtags = formatHashtags(post.hashtags);
  const linkNote = `Link in bio: ${post.link || siteConfig.site.url}`;
  return [post.message, hashtags, linkNote].filter(part => part && part.trim()).join("\n\n");
}
