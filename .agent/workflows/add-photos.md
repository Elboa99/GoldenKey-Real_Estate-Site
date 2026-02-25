---
description: Come aggiungere nuove foto di ville/appartamenti alla griglia del sito
---

# Aggiungere Foto alla Griglia Proprietà

## Prerequisiti
- Le foto devono essere in formato `.jpg`, `.png` o `.webp`
- Node.js installato (per la conversione automatica)

## Procedura

### 1. Metti le foto nella cartella sorgente
Copia le nuove foto nella cartella:
```
goldenkey-site/assets/images/new-photos/
```
Crea la cartella se non esiste.

// turbo
### 2. Esegui lo script di conversione
```bash
node add-property-photos.mjs
```
Lo script automaticamente:
- Converte tutte le foto in `.webp` ottimizzato
- Le rinomina in sequenza (`property-7.webp`, `property-8.webp`, ecc.)
- Genera il codice HTML da copiare

### 3. Copia il codice HTML generato
Lo script stamperà il blocco HTML per ogni nuova foto. Copia e incolla dentro `index.html`:

- **Griglia**: Incolla dentro il `<div class="property-grid">` (riga ~132)
- **Galleria Modal**: Incolla dentro il `<div class="swiper-wrapper">` (riga ~616)

### 4. Verifica
// turbo
```bash
npx -y serve goldenkey-site
```
Apri http://localhost:3000 e controlla che le nuove foto siano visibili nella griglia e cliccabili nella galleria.

### 5. Pulisci
Svuota la cartella `goldenkey-site/assets/images/new-photos/` dopo aver finito.
