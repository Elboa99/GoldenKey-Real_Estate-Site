# 📊 Tracciamento Campagne Ads — Golden Key

## Come funziona
Ogni contatto inviato dal form viene salvato su **Firebase Firestore** con i dati della campagna pubblicitaria (se presenti nell'URL).

Il sistema cattura automaticamente i parametri UTM dall'URL e li salva nel campo `utm` del documento Firestore.

---

## Parametri tracciati

| Parametro | Descrizione | Esempio |
|-----------|-------------|---------|
| `utm_source` | Piattaforma di provenienza | `google`, `facebook`, `instagram` |
| `utm_medium` | Tipo di traffico | `cpc`, `social`, `email` |
| `utm_campaign` | Nome della campagna | `luxury_homes_2025` |
| `utm_term` | Keyword cercata (Google Ads) | `affitto lusso milano` |
| `utm_content` | Variante dell'annuncio | `video_ad_v2` |
| `gclid` | Google Ads Click ID | Aggiunto automaticamente da Google |
| `fbclid` | Meta/Facebook Click ID | Aggiunto automaticamente da Meta |
| `referrer` | Sito di provenienza (fallback) | `google.com` |

---

## Come usarlo nelle campagne

### Google Ads
Usa l'URL di destinazione con parametri UTM:
```
https://goldenkey.it/landing.html?utm_source=google&utm_medium=cpc&utm_campaign=luxury_homes_2025
```
> **Nota**: Google Ads aggiunge automaticamente il `gclid`, non serve inserirlo manualmente.

### Meta / Facebook Ads
```
https://goldenkey.it/landing.html?utm_source=facebook&utm_medium=social&utm_campaign=brand_awareness
```
> **Nota**: Meta aggiunge automaticamente il `fbclid`.

### Instagram Ads
```
https://goldenkey.it/landing.html?utm_source=instagram&utm_medium=social&utm_campaign=stories_promo
```

---

## Esempio dati in Firestore

Quando un utente compila il form dopo aver cliccato su un annuncio, il documento salvato sarà:

```json
{
  "name": "Mario Rossi",
  "email": "mario@email.com",
  "phone": "+39 333 1234567",
  "message": "Vorrei info sull'appartamento in centro",
  "source": "landing",
  "status": "new",
  "createdAt": "2025-02-18T10:30:00Z",
  "utm": {
    "utm_source": "google",
    "utm_medium": "cpc",
    "utm_campaign": "luxury_homes_2025",
    "gclid": "EAIaIQobChMI..."
  }
}
```

Se l'utente arriva senza parametri UTM ma da un sito esterno, verrà salvato il `referrer`:
```json
{
  "utm": {
    "referrer": "google.com"
  }
}
```

---

## File coinvolti
- **`js/main.js`** → Funzione `getUTMParams()` + integrazione in `initFormValidation()`
