import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const srcDir = 'Contenuti Brand Sito/swisstransfer definitvo';
const destDir = 'goldenkey-site/assets/images/contact';

const files = readdirSync(srcDir)
    .filter(f => f.endsWith('.png'))
    .sort((a, b) => parseInt(a) - parseInt(b));

console.log(`Converting ${files.length} images...`);

for (const file of files) {
    const num = file.replace('.png', '');
    const src = join(srcDir, file);
    const dest = join(destDir, `slide-${num}.webp`);
    console.log(`  ${file} -> slide-${num}.webp`);
    await sharp(src)
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(dest);
    console.log(`    ✓ done`);
}
console.log('All conversions complete!');
