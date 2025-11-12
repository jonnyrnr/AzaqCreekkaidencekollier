# Image Setup Instructions

## Required Images

You need to add two images to the `public/images/` directory:

### 1. Missing Person Photo (`missing-person.jpg`)

**Current Status:** ⚠️ PLACEHOLDER - NEEDS TO BE REPLACED

**Image URL Provided:** https://share.google/hXgIhso8QPIaRLxye

**How to Add:**

1. **Download the image from the Google link:**
   - Open: https://share.google/hXgIhso8QPIaRLxye in a web browser
   - Download the image to your computer
   
2. **Rename and place the file:**
   - Rename the downloaded image to `missing-person.jpg`
   - Place it in: `public/images/missing-person.jpg`
   - Replace the existing placeholder file

3. **Recommended specifications:**
   - Format: JPG or PNG
   - Aspect ratio: 3:4 (portrait)
   - Minimum resolution: 600x800 pixels
   - Maximum file size: 2 MB

### 2. Social Media Preview Image (`og-image.jpg`)

**Current Status:** ⚠️ PLACEHOLDER - NEEDS TO BE REPLACED

**Purpose:** This image appears when the website is shared on social media platforms (Facebook, Twitter, LinkedIn, etc.)

**How to Create:**

1. **Create a graphic with:**
   - Dimensions: 1200x630 pixels (exact)
   - Format: JPG or PNG
   - Background: Eye-catching, professional
   - Include:
     - Photo of Kaidence Kollier
     - Text: "MISSING: Kaidence Kollier"
     - Text: "Call 623-217-0545 or 911"
     - Text: "Last seen: Azaq Creek area"
     - Website URL (when available)

2. **Design tools you can use:**
   - Canva (free): https://www.canva.com
   - Adobe Express (free): https://www.adobe.com/express
   - Photoshop, GIMP, or any image editor

3. **Place the file:**
   - Save as `og-image.jpg`
   - Place in: `public/images/og-image.jpg`
   - Replace the existing placeholder file

## Quick Command to Add Images

If you have the images downloaded:

```bash
# From the project root directory
cp /path/to/downloaded/photo.jpg public/images/missing-person.jpg
cp /path/to/created/social-image.jpg public/images/og-image.jpg
```

## Verify Images

After adding the images:

1. **Check file sizes:**
   ```bash
   ls -lh public/images/
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **View the website:**
   - Open http://localhost:3000
   - Verify the missing person photo appears on the main page
   - Check the page source for the og:image meta tag

4. **Test social sharing preview:**
   - Deploy the site (or use a tool like ngrok for testing)
   - Use https://metatags.io to preview how it will look on social media

## Important Notes

- **Privacy:** Ensure you have permission to use these images
- **Copyright:** Only use images you have rights to use
- **Quality:** Use the highest quality images available
- **Backup:** Keep copies of the original images
- **Updates:** If you need to update images, just replace the files

## Contact Information Already Updated

✅ **Phone number:** 623-217-0545 (Mom's number) - Already in `config/siteConfig.ts`
✅ **Emergency contact:** 911 - Already in `config/siteConfig.ts`

## Next Steps

1. Add the images as described above
2. Review `config/siteConfig.ts` for any other information to update
3. Test the website locally: `npm run dev`
4. Deploy when ready (see DEPLOYMENT.md)
