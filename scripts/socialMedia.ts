/**
 * Social Media Automation Scripts
 * 
 * These scripts help automate posting to social media platforms.
 * You'll need to set up API credentials for each platform.
 */

import { siteConfig } from "@/config/siteConfig";
import { formatSocialMessage, formatSocialMessageWithLimit, formatInstagramCaption, SocialPost } from "@/utils/socialMediaHelpers";

/**
 * Facebook Auto-Posting
 * Requires: Facebook Page Access Token
 * Setup: https://developers.facebook.com/docs/pages/access-tokens
 */
export async function postToFacebook(post: SocialPost) {
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;

  if (!accessToken || !pageId) {
    console.error("Facebook credentials not configured");
    return { success: false, error: "Missing Facebook credentials" };
  }

  try {
    const message = formatSocialMessage(post);

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}/feed`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          access_token: accessToken,
          link: post.link || siteConfig.site.url,
        }),
      }
    );

    const data = await response.json();

    if (data.id) {
      console.log("Successfully posted to Facebook:", data.id);
      return { success: true, postId: data.id };
    } else {
      console.error("Facebook posting failed:", data);
      return { success: false, error: data.error?.message };
    }
  } catch (error) {
    console.error("Error posting to Facebook:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Twitter/X Auto-Posting
 * Requires: Twitter API v2 credentials
 * Setup: https://developer.twitter.com/en/docs/twitter-api
 */
export async function postToTwitter(post: SocialPost) {
  const bearerToken = process.env.TWITTER_BEARER_TOKEN;

  if (!bearerToken) {
    console.error("Twitter credentials not configured");
    return { success: false, error: "Missing Twitter credentials" };
  }

  try {
    // Twitter/X has a 280 character limit
    const truncatedMessage = formatSocialMessageWithLimit(post, 280);

    const response = await fetch("https://api.twitter.com/2/tweets", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: truncatedMessage,
      }),
    });

    const data = await response.json();

    if (data.data?.id) {
      console.log("Successfully posted to Twitter:", data.data.id);
      return { success: true, postId: data.data.id };
    } else {
      console.error("Twitter posting failed:", data);
      return { success: false, error: data.errors?.[0]?.message };
    }
  } catch (error) {
    console.error("Error posting to Twitter:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Instagram Auto-Posting
 * Requires: Instagram Graph API credentials
 * Setup: https://developers.facebook.com/docs/instagram-api
 * Note: Instagram requires images for posts
 */
export async function postToInstagram(post: SocialPost) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_ACCOUNT_ID;

  if (!accessToken || !accountId) {
    console.error("Instagram credentials not configured");
    return { success: false, error: "Missing Instagram credentials" };
  }

  if (!post.image) {
    return { success: false, error: "Instagram posts require an image" };
  }

  try {
    // Step 1: Create media container
    // Instagram doesn't support clickable links in captions
    const caption = formatInstagramCaption(post);

    const containerResponse = await fetch(
      `https://graph.facebook.com/v18.0/${accountId}/media`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_url: post.image,
          caption,
          access_token: accessToken,
        }),
      }
    );

    const containerData = await containerResponse.json();

    if (!containerData.id) {
      console.error("Instagram container creation failed:", containerData);
      return { success: false, error: containerData.error?.message };
    }

    // Step 2: Publish the media
    const publishResponse = await fetch(
      `https://graph.facebook.com/v18.0/${accountId}/media_publish`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creation_id: containerData.id,
          access_token: accessToken,
        }),
      }
    );

    const publishData = await publishResponse.json();

    if (publishData.id) {
      console.log("Successfully posted to Instagram:", publishData.id);
      return { success: true, postId: publishData.id };
    } else {
      console.error("Instagram publishing failed:", publishData);
      return { success: false, error: publishData.error?.message };
    }
  } catch (error) {
    console.error("Error posting to Instagram:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Post to all platforms simultaneously
 */
export async function postToAllPlatforms(post: SocialPost) {
  const results = {
    facebook: await postToFacebook(post),
    twitter: await postToTwitter(post),
    instagram: post.image ? await postToInstagram(post) : { success: false, error: "No image provided" },
  };

  const successCount = Object.values(results).filter(r => r.success).length;

  return {
    results,
    successCount,
    totalPlatforms: 3,
  };
}

/**
 * Schedule a post for later (requires a job scheduler like node-cron or external service)
 */
export interface ScheduledPost extends SocialPost {
  scheduledTime: Date;
  platforms: ("facebook" | "twitter" | "instagram")[];
}

export function schedulePost(post: ScheduledPost) {
  // This is a placeholder - in production, use:
  // - node-cron for server-side scheduling
  // - External service like Buffer, Hootsuite API
  // - Database + cron job to check scheduled posts
  
  console.log("Post scheduled for:", post.scheduledTime);
  console.log("Platforms:", post.platforms);
  console.log("Message:", post.message);

  return {
    success: true,
    message: "Post scheduled (implementation required)",
    scheduledPost: post,
  };
}
