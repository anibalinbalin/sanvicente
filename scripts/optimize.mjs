import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/assets/images';
const outputDir = 'public/assets/images/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all PNG files
const files = fs.readdirSync(inputDir);
const pngFiles = files.filter(file => file.endsWith('.png'));

console.log(`Found ${pngFiles.length} PNG files to optimize`);

// Process each file
for (const file of pngFiles) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);
  
  console.log(`Processing ${file}...`);
  
  sharp(inputPath)
    .png({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(2);
      console.log(`✓ Reduced ${file} by ${savings}%`);
    })
    .catch(err => {
      console.error(`Error processing ${file}:`, err);
    });
} 