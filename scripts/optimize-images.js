const sharp = require('sharp');
const { readdir, mkdir, stat } = require('fs/promises');
const path = require('path');
const fs = require('fs').promises;

const IMAGES_DIR = 'public/assets/images';
const IMAGES_NIGHT_DIR = 'public/assets/images_night';
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg'];

async function processDirectory(inputDir, outputDir) {
  try {
    // Create output directory
    await mkdir(outputDir, { recursive: true });

    // Read directory contents
    const entries = await readdir(inputDir, { withFileTypes: true });

    for (const entry of entries) {
      const inputPath = path.join(inputDir, entry.name);
      const relativePath = path.relative(IMAGES_DIR, inputDir);
      const outputSubDir = path.join(outputDir, relativePath);

      if (entry.isDirectory() && entry.name !== 'optimized') {
        // Recursively process subdirectories
        await processDirectory(inputPath, path.join(outputSubDir, entry.name));
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (SUPPORTED_FORMATS.includes(ext)) {
          const fileNameWithoutExt = path.parse(entry.name).name;
          const outputPath = path.join(outputSubDir, `${fileNameWithoutExt}.webp`);

          try {
            // Ensure output directory exists
            await mkdir(path.dirname(outputPath), { recursive: true });

            // Convert to WebP
            await sharp(inputPath)
              .webp({ quality: 80, effort: 6 })
              .toFile(outputPath);

            const inputStats = await stat(inputPath);
            const outputStats = await stat(outputPath);
            const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);
            
            console.log(`✓ Converted ${path.relative(IMAGES_DIR, inputPath)} to WebP (saved ${savings}%)`);
          } catch (err) {
            console.error(`Failed to process ${inputPath}:`, err);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${inputDir}:`, error);
  }
}

async function optimizeImages() {
  try {
    console.log('Starting image optimization...');
    
    // Process day images
    console.log('\nProcessing day images...');
    await processDirectory(IMAGES_DIR, IMAGES_DIR);
    
    // Process night images
    console.log('\nProcessing night images...');
    await processDirectory(IMAGES_NIGHT_DIR, IMAGES_NIGHT_DIR);

    console.log('\nImage optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
  }
}

optimizeImages(); 