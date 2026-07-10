# MEDIA.md — médias attendus et emplacements

Checklist des médias à capturer depuis l'app réelle, avec leur point de
branchement exact. Chaque emplacement dans le HTML porte un commentaire
`<!-- MEDIA: nom-du-fichier -->` juste au-dessus du placeholder à remplacer.

Règles transverses :
- **Bilingue** : toute capture montrant l'interface de l'app existe en deux
  variantes — app en anglais (`-en`) pour `/`, app en français (`-fr`) pour `/fr/`.
- Ne jamais recolorer ni inverser une image du texte coranique.
- Déposer les fichiers dans `assets/img/`, puis suivre le commentaire `MEDIA:`
  de chaque page (pour la vidéo V1, le snippet `<video>` complet est fourni en
  commentaire dans le HTML — remplacer l'`<img>` placeholder par ce snippet).

## Vidéo

| ID | Fichiers attendus | Specs | Emplacement | Statut |
|---|---|---|---|---|
| **V1** (requis) | `hero-curl-en.mp4` + `hero-curl-en.webm` + `hero-curl-poster-en.jpg` et variantes `-fr` | 1080×2280 (9:19), muet, boucle, ≤ 6 s, H.264 + WebM | Hero de `index.html` et `fr/index.html` | ⛔ manquant |
| V2 (optionnel) | `tablet-curl-en.mp4` (+`-fr` si habillage visible) | Tablette paysage, double page | Non placé (page volontairement épurée) — utilisable plus tard | ⛔ optionnel |

Si l'habillage de l'app (barres, boutons) n'est pas visible dans le cadre,
une seule variante de la vidéo suffit : la référencer alors dans les deux pages.

## Captures téléphone (1080×2280, PNG/WebP, < 300 Ko)

| ID | Fichiers attendus | Contenu | Emplacement | Statut |
|---|---|---|---|---|
| **S1** (requise) | `s1-reading-en.png` / `s1-reading-fr.png` | Page de lecture plein écran, Tajweed couleur (Hafs) | Section « Un vrai mushaf, partout » des 2 accueils | ⛔ manquant |
| S8 (optionnelle) | `s8-focus-en.png` / `s8-focus-fr.png` | Mode sans distraction, plein écran total | Section « Lecture immersive » des 2 accueils | ⛔ manquant |
| S2 (réserve) | `s2-surahs-en.png` / `-fr` | Liste des sourates | Non placé | — |
| S3 (réserve) | `s3-goto-en.png` / `-fr` | Recherche / aller à | Non placé | — |
| S4 (réserve) | `s4-home-en.png` / `-fr` | Accueil « Continuer la lecture » | Non placé | — |
| S5 (réserve) | `s5-download-en.png` / `-fr` | Dialogue de téléchargement | Non placé | — |
| S6 (réserve) | `s6-downloads-en.png` / `-fr` | Réglages → Téléchargements | Non placé | — |

## Captures tablette (2048×1536, mêmes règles)

Même nomenclature avec suffixe `-tablet`, ex. `s1-reading-fr-tablet.png`.
Aucune n'est placée aujourd'hui (page épurée) ; utiles si le site s'étoffe.

## Placeholders actuellement en place

| Fichier | Rôle |
|---|---|
| `assets/img/placeholder-video-poster.svg` | Tient la place de V1 dans le hero |
| `assets/img/placeholder-s1.svg` | Tient la place de S1 |
| `assets/img/placeholder-s8.svg` | Tient la place de S8 |

## Déjà fournis (finaux)

| Fichier | Rôle |
|---|---|
| `assets/img/icon-512/192/64.png`, `apple-touch-icon.png`, `favicon-32.png` | Icône app v3 déclinée (logo, favicons, manifest) |
| `assets/img/og-image.jpg` (1200×630) | `og:image` (partage social) |
| `assets/img/og-image@2x.jpg` (2400×1260) | `twitter:image` |
