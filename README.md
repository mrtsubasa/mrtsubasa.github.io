<div align="center">

# 翼 tsubasa — 総長

**Je touche à tout.** Design, dev full-stack, bots, Linux et infra.

[**mrtsubasa.github.io**](https://mrtsubasa.github.io) · [GitHub](https://github.com/mrtsubasa) · [Discord Eimei](https://discord.gg/eimei) · [Discord Clarity](https://discord.gg/NbBGsPKFjP)

</div>

---

Mon portfolio perso, dans un thème inspiré de Mikey (Tokyo Revengers) : fond sombre, accents or, kanji brodés et fiches du crew façon dossier classé.

Le site est entièrement statique, en HTML, CSS et JavaScript vanilla, sans framework ni build, et il est servi directement par GitHub Pages.

## Sections

| # | Section | Contenu |
|---|---------|---------|
| 壱 | **Domaines** | Design, dev full-stack, bots, Linux & rice, infra & sécu |
| 弐 | **Designs** | Galerie de bannières, PP et miniatures Photoshop, avec une lightbox navigable au clavier |
| 参 | **Code** | Dépôts publics chargés en direct via l'API GitHub, avec les totaux de dépôts, d'étoiles et de forks |
| 肆 | **Moi** | Ma fiche « dossier » |
| 伍 | **Le crew** | Les potes, en carrousel ou en grille, filtrables par catégorie |
| 陸 | **Contact** | Discord en MP (pseudo copiable) et les serveurs de la commu |

Le site est bilingue **FR / EN**. La langue choisie est mémorisée dans le navigateur.

## Structure

```
.
├── index.html              # page unique
├── favicon.ico
├── Src/
│   ├── Css/styles.css
│   ├── Js/script.js        # données (designs, crew), i18n et rendu
│   └── Assets/Images/
│       ├── Designs/        # visuels en pleine résolution (.png)
│       │   └── thumbs/     # miniatures .webp utilisées dans la galerie
│       ├── Team/           # avatars du crew
│       ├── Profile/        # portrait du hero, logo, icônes
│       └── Projects/
└── legacy/
    └── fusion-of-legends/  # ancien design, archivé
```

## Lancer en local

Aucune dépendance n'est nécessaire, un serveur statique suffit :

```sh
python -m http.server 8000
# ou : bunx serve .
```

Ensuite, ouvre `http://localhost:8000`.

> Sans authentification, l'API GitHub est limitée à 60 requêtes par heure et par IP. Si la section Code affiche une erreur, il faut attendre que la limite se réinitialise.

## Mettre à jour le contenu

Tout le contenu se modifie en haut de `Src/Js/script.js`.

### Ajouter un design

1. Mets le visuel en pleine résolution dans `Src/Assets/Images/Designs/`, par exemple `Nom.png`.
2. Ajoute sa miniature au même nom en `.webp` dans `Designs/thumbs/` :
   ```sh
   cwebp -q 80 -resize 900 0 Nom.png -o thumbs/Nom.webp
   ```
3. Ajoute une ligne dans `DESIGNS` :
   ```js
   { name: 'Nom', file: 'Nom.png' },
   // fit: 'contain' si le visuel n'est pas au format bannière 3:1 (PP, miniature)
   ```

Le compteur `ls ~/designs | wc -l` du terminal se met à jour tout seul.

### Ajouter quelqu'un au crew

1. Mets son avatar (png, jpg ou gif) dans `Src/Assets/Images/Team/`.
2. Ajoute une ligne dans `PEOPLE` :
   ```js
   { name: 'Pseudo', file: 'Pseudo.png', role: 'Dev,Designer', title: 'The legend', group: 'crew', cats: ['info'] },
   ```
   - `role` : un ou plusieurs rôles, séparés par des virgules
   - `group` : `me` pour la section Moi, `crew` pour la section Le crew
   - `cats` : une ou plusieurs catégories parmi `design`, `info`, `gaming` et `autre`

Les noms de fichiers sont **sensibles à la casse** sur GitHub Pages.

### Textes et traductions

Tous les textes de l'interface se trouvent dans l'objet `I18N`, avec une entrée `fr` et une entrée `en`. Dans le HTML, un élément est relié à sa clé par les attributs `data-i18n` (texte), `data-i18n-html` (HTML), `data-i18n-aria` (aria-label) ou `data-i18n-alt` (alt).

## Déploiement

Chaque push sur `main` est publié automatiquement par GitHub Pages en quelques minutes. Si le site ne change pas, recharge sans le cache avec `Ctrl+Shift+R`.

---

<div align="center">

<sub>“I stay in the shadows to shine brighter when it truly matters.”</sub>

</div>
