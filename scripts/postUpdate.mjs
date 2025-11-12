#!/usr/bin/env node

/**
 * Social Media Post CLI Script
 * 
 * Usage: node scripts/postUpdate.mjs "Your update message here"
 * 
 * Prerequisites:
 * 1. Set up environment variables in .env.local
 * 2. Configure API credentials for social platforms
 */

import { config } from 'dotenv';
config({ path: '.env.local' });

// Simple fetch-based implementations without TypeScript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://azaqcreek-missing.com';

async function postToFacebook(message) {
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;

  if (!accessToken || !pageId) {
    console.log('⚠️  Facebook: Credentials not configured (skipping)');
    return { success: false, error: 'Missing credentials' };
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}/feed`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `${message}\n\n${siteUrl}\n\n#FindKaidenceKollier #MissingTeen #AzaqCreek`,
          access_token: accessToken,
        }),
      }
    );

    const data = await response.json();
    if (data.id) {
      console.log('✅ Facebook: Posted successfully!');
      return { success: true, postId: data.id };
    } else {
      console.log('❌ Facebook: Failed -', data.error?.message);
      return { success: false, error: data.error?.message };
    }
  } catch (error) {
    console.log('❌ Facebook: Error -', error.message);
    return { success: false, error: error.message };
  }
}

async function postToTwitter(message) {
  const bearerToken = process.env.TWITTER_BEARER_TOKEN;

  if (!bearerToken) {
    console.log('⚠️  Twitter: Credentials not configured (skipping)');
    return { success: false, error: 'Missing credentials' };
  }

  try {
    const text = `${message}\n\n${siteUrl}\n\n#FindKaidenceKollier #MissingTeen`;
    const truncated = text.length > 280 ? text.substring(0, 277) + '...' : text;

    const response = await fetch('https://api.twitter.com/2/tweets', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: truncated }),
    });

    const data = await response.json();
    if (data.data?.id) {
      console.log('✅ Twitter: Posted successfully!');
      return { success: true, postId: data.data.id };
    } else {
      console.log('❌ Twitter: Failed -', data.errors?.[0]?.message);
      return { success: false, error: data.errors?.[0]?.message };
    }
  } catch (error) {
    console.log('❌ Twitter: Error -', error.message);
    return { success: false, error: error.message };
  }
}

// Main execution
const message = process.argv[2];

if (!message) {
  console.log('Usage: node scripts/postUpdate.mjs "Your update message"');
  console.log('Example: node scripts/postUpdate.mjs "New information: Kaidence was last seen wearing a blue jacket"');
  process.exit(1);
}

console.log('📢 Posting update to social media...\n');
console.log(`Message: "${message}"\n`);

Promise.all([
  postToFacebook(message),
  postToTwitter(message),
]).then((results) => {
  const successCount = results.filter(r => r.success).length;
  console.log(`\n📊 Summary: ${successCount}/2 platforms posted successfully`);
  
  if (successCount === 0) {
    console.log('\n💡 Tip: Configure API credentials in .env.local to enable social posting');
    console.log('   See DEPLOYMENT.md for setup instructions');
  }
});
