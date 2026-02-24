import sharp from 'sharp';
import path from 'path';

const destDir = 'c:/Users/KennyLuigiBoateng/OneDrive - ITS Angelo Rizzoli/Desktop/progetto andre/goldenkey-site/assets/images';

// Folder 1: recensioni (Airbnb reviews)
const folder1 = 'c:/Users/KennyLuigiBoateng/OneDrive - ITS Angelo Rizzoli/Desktop/progetto andre/Contenuti Brand Sito/recensioni';
const images1 = [
    'WhatsApp Image 2026-02-15 at 11.29.50 AM.jpeg',
    'WhatsApp Image 2026-02-15 at 11.32.19 AM (1).jpeg',
    'WhatsApp Image 2026-02-15 at 11.32.19 AM.jpeg',
    'WhatsApp Image 2026-02-15 at 11.33.35 AM.jpeg',
    'WhatsApp Image 2026-02-15 at 11.33.36 AM.jpeg'
];

// Folder 2: Screen recensioni (Booking reviews)
const folder2 = 'c:/Users/KennyLuigiBoateng/OneDrive - ITS Angelo Rizzoli/Desktop/progetto andre/Contenuti Brand Sito/Screen recensioni';
const images2 = [
    '5.png',
    '6.png',
    'Schermata 2025-08-06 alle 14.05.51.png',
    'Schermata 2025-08-06 alle 14.06.38.png',
    'Schermata 2025-08-06 alle 14.07.06.png',
    'Schermata 2025-08-06 alle 14.07.39.png',
    'Schermata 2025-08-06 alle 14.11.52.png'
];

async function processAll() {
    let index = 8; // Start from review-8

    // Process folder 1
    for (const file of images1) {
        const src = path.join(folder1, file);
        const dest = path.join(destDir, `review-${index}.webp`);
        const meta = await sharp(src).metadata();
        console.log(`review-${index}.webp <- ${file} (${meta.width}x${meta.height})`);
        await sharp(src).webp({ quality: 90 }).toFile(dest);
        index++;
    }

    // Process folder 2
    for (const file of images2) {
        const src = path.join(folder2, file);
        const dest = path.join(destDir, `review-${index}.webp`);
        const meta = await sharp(src).metadata();
        console.log(`review-${index}.webp <- ${file} (${meta.width}x${meta.height})`);
        await sharp(src).webp({ quality: 90 }).toFile(dest);
        index++;
    }

    console.log(`Done! Created review-8 to review-${index - 1}`);
}

processAll().catch(console.error);
