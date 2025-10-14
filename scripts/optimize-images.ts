import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import path from 'path';

const IMAGES_DIR = 'public/assets/images';
const OUTPUT_DIR = 'public/assets/images/optimized';

async function optimizeImages() {
  try {
    // Create output directory if it doesn't exist
    await mkdir(OUTPUT_DIR, { recursive: true });

    // Read all files in the images directory
    const files = await readdir(IMAGES_DIR);
    console.log(`Found ${files.length} files to process...`);

    for (const file of files) {
      const inputPath = path.join(IMAGES_DIR, file);
      const fileInfo = path.parse(file);
      const outputPath = path.join(OUTPUT_DIR, `${fileInfo.name}.webp`);

      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);

        const inputStats = await stat(inputPath);
        const outputStats = await stat(outputPath);
        const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);
        
        console.log(`✓ Converted ${file} to WebP (saved ${savings}%)`);
      } catch (err) {
        console.error(`Failed to process ${file}:`, err);
      }
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
  }
}

optimizeImages(); 