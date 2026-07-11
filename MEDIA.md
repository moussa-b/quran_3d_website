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

## Captures téléphone placées (358×800, PNG, < 300 Ko)

Issues de `store-assets/android/phone/`, redimensionnées pour le web.

| Fichier | Contenu | Emplacement | Statut |
|---|---|---|---|
| `screen-reading-en.png` / `-fr` | Page de lecture mushaf plein écran, Tajweed couleur (store `S1.png`) | Section « Lecture immersive » des 2 accueils | ✅ fourni |
| `screen-surahs-en.png` / `-fr` | Liste des sourates (navigation) (store `S2.png`) | Section « Un vrai mushaf, partout » des 2 accueils | ✅ fourni |

Captures store en réserve (non placées, disponibles dans
`store-assets/android/phone/{en,fr}/S3–S6.png`) : recherche/aller à,
téléchargements, etc. — utiles si la page s'étoffe.

## Captures tablette (2048×1536, mêmes règles)

Même nomenclature avec suffixe `-tablet`, ex. `s1-reading-fr-tablet.png`.
Aucune n'est placée aujourd'hui (page épurée) ; utiles si le site s'étoffe.

## Placeholder encore en place

| Fichier | Rôle |
|---|---|
| `assets/img/placeholder-video-poster.svg` | Tient la place de la vidéo V1 dans le hero (à remplacer) |

## Déjà fournis (finaux)

| Fichier | Rôle |
|---|---|
| `assets/img/icon-512/192/64.png`, `apple-touch-icon.png`, `favicon-32.png` | Icône app v3 déclinée (logo, favicons, manifest) |
| `assets/img/og-image.jpg` (1200×630) | `og:image` (partage social) |
| `assets/img/og-image@2x.jpg` (2400×1260) | `twitter:image` |
