#!/usr/bin/env node

/**
 * Example script to post updates to social media
 * Usage: node scripts/postUpdate.mjs "Your message here"
 */

import { postToAllPlatforms } from './socialMedia.js';
import { siteConfig } from '../config/siteConfig.js';

async function main() {
  const message = process.argv[2] || `Help us find ${siteConfig.person.name}. Any information could be crucial.`;

  const post = {
    message,
    link: siteConfig.site.url,
    hashtags: siteConfig.social.hashtags,
    image: undefined, // Add image URL for Instagram
  };

  console.log('Posting to social media...');
  console.log('Message:', message);
  console.log('');

  const results = await postToAllPlatforms(post);

  console.log('\nResults:');
  console.log('========');
  console.log(`Facebook: ${results.results.facebook.success ? '✓ Success' : '✗ Failed'}`);
  console.log(`Twitter:  ${results.results.twitter.success ? '✓ Success' : '✗ Failed'}`);
  console.log(`Instagram: ${results.results.instagram.success ? '✓ Success' : '✗ Failed'}`);
  console.log('');
  console.log(`Successfully posted to ${results.successCount}/${results.totalPlatforms} platforms`);

  if (results.successCount === 0) {
    console.error('\nNote: Make sure to set up API credentials in .env.local');
    console.error('See scripts/socialMedia.ts for setup instructions');
  }
}

main().catch(console.error);
