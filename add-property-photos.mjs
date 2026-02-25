/**
 * Goldenkey — Add Property Photos
 * 
 * USO: Metti le nuove foto in goldenkey-site/assets/images/new-photos/
 *       poi esegui: node add-property-photos.mjs
 * 
 * Lo script:
 * 1. Trova tutte le immagini nella cartella new-photos
 * 2. Conta le property-X.webp già esistenti per continuare la numerazione
 * 3. Converte e ottimizza in .webp
 * 4. Stampa il codice HTML da copiare in index.html
 */

import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const newPhotosDir = 'goldenkey-site/assets/images/new-photos';
const destDir = 'goldenkey-site/assets/images';

// Crea la cartella sorgente se non esiste
if (!existsSync(newPhotosDir)) {
    mkdirSync(newPhotosDir, { recursive: true });
    console.log(`📁 Cartella creata: ${newPhotosDir}`);
    console.log(`   Metti le foto qui dentro e riesegui lo script.`);
    process.exit(0);
}

// Trova le nuove foto
const validExts = ['.jpg', '.jpeg', '.png', '.webp', '.heic'];
const newFiles = readdirSync(newPhotosDir)
    .filter(f => validExts.some(ext => f.toLowerCase().endsWith(ext)))
    .sort();

if (newFiles.length === 0) {
    console.log('⚠️  Nessuna foto trovata in ' + newPhotosDir);
    console.log('   Formati supportati: ' + validExts.join(', '));
    process.exit(0);
}

// Conta le property-X.webp già esistenti
const existing = readdirSync(destDir)
    .filter(f => f.startsWith('property-') && f.endsWith('.webp'))
    .map(f => parseInt(f.replace('property-', '').replace('.webp', '')))
    .filter(n => !isNaN(n));

const startIndex = existing.length > 0 ? Math.max(...existing) + 1 : 1;

console.log(`\n🏠 Goldenkey — Aggiungi Foto Proprietà`);
console.log(`   Foto trovate: ${newFiles.length}`);
console.log(`   Numerazione da: property-${startIndex}.webp\n`);

const gridHtml = [];
const galleryHtml = [];

for (let i = 0; i < newFiles.length; i++) {
    const file = newFiles[i];
    const num = startIndex + i;
    const src = join(newPhotosDir, file);
    const dest = join(destDir, `property-${num}.webp`);
    const slideIndex = num - 1; // 0-based per data-slide-index

    process.stdout.write(`  ${file} → property-${num}.webp ... `);

    try {
        await sharp(src)
            .resize(1200, null, { withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(dest);
        console.log('✓');

        // Genera HTML per la griglia
        gridHtml.push(
            `                            <div class="pg-item" data-slide-index="${slideIndex}">
                                <img src="assets/images/property-${num}.webp"
                                    alt="Proprietà Goldenkey ${num}" loading="lazy">
                                <div class="pg-overlay">
                                    <i data-lucide="maximize-2"></i>
                                </div>
                            </div>`
        );

        // Genera HTML per la galleria modal
        galleryHtml.push(
            `                    <div class="swiper-slide"><img src="assets/images/property-${num}.webp"
                            alt="Proprietà Goldenkey ${num}" loading="lazy"></div>`
        );

    } catch (err) {
        console.log(`✗ ${err.message}`);
    }
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`✅ ${newFiles.length} foto convertite!\n`);

console.log(`📋 COPIA QUESTO CODICE NELLA GRIGLIA (index.html, dentro <div class="property-grid">):\n`);
console.log(gridHtml.join('\n'));

console.log(`\n${'─'.repeat(60)}\n`);

console.log(`📋 COPIA QUESTO CODICE NELLA GALLERIA MODAL (index.html, dentro <div class="swiper-wrapper">):\n`);
console.log(galleryHtml.join('\n'));

console.log(`\n${'═'.repeat(60)}`);
console.log(`💡 Dopo aver incollato, puoi svuotare la cartella ${newPhotosDir}`);
