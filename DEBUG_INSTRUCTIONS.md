# Instructions de débogage

## Problème
Les sections GitHub Projects, Designs et Team ne s'affichent pas sur le site.

## Étapes de débogage

### 1. Ouvrir la Console du Navigateur
1. Ouvrez votre site dans le navigateur: `https://mrtsubasa.github.io/`
2. Appuyez sur **F12** ou **Ctrl+Shift+I** (Cmd+Option+I sur Mac)
3. Allez dans l'onglet **Console**

### 2. Vérifier les messages de log
Vous devriez voir les messages suivants dans la console:

```
🔥 DOMContentLoaded - Starting initialization...
📦 Loading GitHub projects...
🎨 Loading designs...
👥 Loading team...
✅ All initialization complete
```

Si vous voyez des messages d'erreur (❌), notez-les.

### 3. Vérifications spécifiques

#### A. GitHub Projects
Recherchez dans la console:
- `🔍 loadGitHubProjects() started`
- `📍 DOM elements:` - vérifiez que tous sont `true`
- `✅ Received X repos from GitHub`

**Erreurs possibles:**
- ❌ `github-projects container not found!` → Le container HTML n'existe pas
- ❌ Erreur GitHub API → Problème de rate limiting ou connexion

#### B. Designs
Recherchez:
- `🔍 loadDesigns() started`
- `📍 designs-grid element found: true`
- `✅ Designs loaded successfully!`

#### C. Team
Recherchez:
- `🔍 loadTeam() started`
- `📍 team-grid element found: true`
- `✅ Team loaded successfully!`

### 4. Vérifier le chargement des fichiers
Dans l'onglet **Network** (Réseau):
1. Rafraîchissez la page (F5)
2. Vérifiez que ces fichiers se chargent sans erreur 404:
   - `index.html`
   - `Src/Js/script.js`
   - `Src/Css/styles.css`

### 5. Test de débogage
Ouvrez: `https://mrtsubasa.github.io/test-debug.html`

Cette page test va:
- Vérifier que JavaScript fonctionne
- Tester l'API GitHub
- Vérifier les éléments DOM

## Solutions courantes

### Si rien ne s'affiche:
1. **Vider le cache du navigateur**: Ctrl+F5 ou Ctrl+Shift+R
2. **Attendre le déploiement GitHub Pages**: Peut prendre 2-5 minutes
3. **Vérifier la branche**: Assurez-vous que GitHub Pages pointe vers la bonne branche

### Si l'API GitHub ne fonctionne pas:
- GitHub limite à 60 requêtes/heure sans authentification
- Attendez 1 heure ou utilisez une connexion différente

### Si les images ne chargent pas:
- Vérifiez que les dossiers `Src/Assets/Images/Designs/` et `Src/Assets/Images/Team/` existent
- Vérifiez que les noms de fichiers correspondent exactement (sensible à la casse)

## Envoyer les résultats
Copiez tous les messages de la console et envoyez-les pour analyse.
