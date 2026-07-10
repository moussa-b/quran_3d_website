# Site vitrine — Quran's Pages / Pages du Coran

Site statique bilingue (EN par défaut à `/`, FR sous `/fr/`) présentant l'app
mobile de lecture du Coran **Quran's Pages** (FR : **Pages du Coran**).
HTML/CSS/JS pur — aucun build, aucune dépendance, aucun backend.

## Arborescence

```
/                    Accueil EN          /fr/                 Accueil FR
/privacy/            Confidentialité EN  /fr/privacy/         Confidentialité FR
/support/            Support EN          /fr/support/         Support FR
/terms/              Conditions EN       /fr/terms/           Conditions FR
404.html             Page d'erreur bilingue
assets/              css / js / fonts (self-hostées) / img
_redirects           /en → / (301)       _headers             cache + sécurité
robots.txt · sitemap.xml · site.webmanifest
```

## Développement local

Aucun outillage requis :

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

(Les URL propres `/privacy/` fonctionnent car chaque page est un
`dossier/index.html`.)

## Déploiement — Cloudflare Pages (via GitHub)

1. Pousser ce repo sur GitHub (`specs/` est gitignoré et ne sera pas poussé).
2. Dans le dashboard Cloudflare : **Workers & Pages → Create → Pages →
   Connect to Git** → choisir le repo.
3. Réglages de build :
   - **Framework preset** : None
   - **Build command** : *(vide)*
   - **Build output directory** : `/` (racine)
4. Déployer. Le site est servi sur `<projet>.pages.dev`.
5. **Domaine custom** : Pages → Custom domains → ajouter
   `quran.bdzapps.com`, puis chez OVH créer le CNAME :
   ```
   quran  CNAME  <projet>.pages.dev.
   ```
   (Cloudflare valide automatiquement une fois le DNS propagé.)

Chaque `git push` sur la branche principale redéploie automatiquement.
Rollback : dashboard Pages → Deployments → « Rollback to this deployment ».

## Placeholders à remplacer (une passe)

| Quoi | Où | Statut |
|---|---|---|
| Vidéo V1 du pli 3D (+ posters) | hero de `/` et `/fr/` — voir le commentaire `MEDIA:` dans le HTML | ⛔ manquant |
| Capture S1 (page de lecture) | section « Un vrai mushaf » des 2 accueils | ⛔ manquant |
| Capture S8 (mode sans distraction) | section « Lecture immersive » des 2 accueils | ⛔ optionnelle |
| URLs stores réelles | badges « Bientôt disponible » des 2 accueils (hero + CTA final) | ⛔ en attente de publication |

Le détail complet (dimensions, formats, noms de fichiers) est dans
**[MEDIA.md](MEDIA.md)**. Chaque emplacement dans le HTML est marqué d'un
commentaire `<!-- MEDIA: nom-du-fichier -->`.

## Ce que le site ne fait pas (par conception)

- Aucun cookie, aucun tracker, aucune analytics, aucune requête tierce
  (polices self-hostées). Cohérent avec la politique de confidentialité de
  l'app : « aucune donnée collectée ».
- Aucun formulaire (pas de collecte d'e-mail).
- Pas de redirection par langue du navigateur : `/` sert l'anglais, le
  sélecteur EN⇄FR est manuel et préserve la page courante.
