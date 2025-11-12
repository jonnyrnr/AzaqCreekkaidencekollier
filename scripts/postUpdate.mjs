#!/usr/bin/env node
/**
 * Social Media Post Script
 * 
 * Usage: node scripts/postUpdate.mjs "Your message here"
 * 
 * This script posts updates to configured social media platforms.
 * Make sure to set up environment variables in .env.local first.
 */

import { postToAllPlatforms } from './socialMedia.js';
import { siteConfig } from '../config/siteConfig.js';

const message = process.argv[2];

if (!message) {
  console.error('❌ Error: Please provide a message');
  console.log('Usage: node scripts/postUpdate.mjs "Your message here"');
  process.exit(1);
}

console.log('📢 Posting update to social media...');
console.log('Message:', message);
console.log('');

const post = {
  message,
  link: siteConfig.site.url,
  hashtags: siteConfig.social.hashtags,
};

const results = await postToAllPlatforms(post);

console.log('\n📊 Results:');
console.log(`✓ ${results.successCount}/${results.totalPlatforms} platforms posted successfully`);
console.log('');

if (results.results.facebook.success) {
  console.log('✓ Facebook: Posted successfully');
} else {
  console.log(`✗ Facebook: ${results.results.facebook.error}`);
}

if (results.results.twitter.success) {
  console.log('✓ Twitter: Posted successfully');
} else {
  console.log(`✗ Twitter: ${results.results.twitter.error}`);
}

if (results.results.instagram.success) {
  console.log('✓ Instagram: Posted successfully');
} else {
  console.log(`✗ Instagram: ${results.results.instagram.error}`);
}

console.log('');
console.log('Note: Configure API credentials in .env.local to enable posting');
