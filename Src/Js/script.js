// ==========================================================
// Tsubasa — 総長
// ==========================================================

const GITHUB_USER = 'mrtsubasa';
const DESIGNS_DIR = './Src/Assets/Images/Designs/';
const TEAM_DIR = './Src/Assets/Images/Team/';

// fit: 'contain' pour les visuels qui ne sont pas au format bannière 3:1
const DESIGNS = [
    { name: 'Gilgamesh', file: 'GilgameshTsuBanner.png' },
    { name: 'Hao', file: 'hao_final.png' },
    { name: 'Yoh Asakura', file: 'TsuNewBannerYohAsakura.png' },
    { name: 'Kiyo', file: 'Kiyo_Banner.png' },
    { name: 'Aishu', file: 'AishuBannerByTsu.png' },
    { name: 'Coco', file: 'Coco_Final.png' },
    { name: 'Coco — v2', file: 'Coco_Final_2.png' },
    { name: 'Drizz', file: 'Drizz_No_BS.png' },
    { name: 'Drizz — final', file: 'SPOILER_final-drizz.png' },
    { name: 'Esdeath', file: 'EsdeathbannerEirinByTsu.png' },
    { name: 'Hentai', file: 'HentaiBannerByTsu.png' },
    { name: 'Kira Hiroto', file: 'KiraHirotoBannerTsu.png' },
    { name: 'Lucy', file: 'LucyBannerExemple.png' },
    { name: 'Ma', file: 'MaBannerByMe.png' },
    { name: 'Ma — final', file: 'SPOILER_final_MaBanner.png' },
    { name: 'Mianzo', file: 'MianzoBanner.png' },
    { name: 'Yoh', file: 'NewBannerYoh.png' },
    { name: 'Kaulder', file: 'SPOILER_Kaulder_Final.png' },
    { name: 'Sxjic', file: 'Spoiler_Sxjic-Banner.png' },
    { name: 'Sxjic × Trixma', file: 'Spoiler_Sxjic-Trixma.png' },
    { name: 'The World — miniature', file: 'TheWorldMinia.png', fit: 'contain' },
    { name: 'Gilgamesh — avatar', file: 'PpGilgaMeshTsu.png', fit: 'contain' }
];

// group : 'me' (section Moi) ou 'crew' (section Le crew)
// cats  : une ou plusieurs catégories parmi CATEGORIES
// Pour ajouter un pote : mets sa photo dans Src/Assets/Images/Team/ puis ajoute une ligne ici, ex. :
// { name: 'Pseudo', file: 'Pseudo.png', role: 'Developer', title: 'The legend', group: 'crew', cats: ['info'] },
const PEOPLE = [
    { name: 'Tsubasa', file: 'Tsu.gif', title: 'The honored king', lead: true, group: 'me', cats: ['design', 'info'] },
    { name: 'Aelialou', file: 'Aelialou.png', role: 'Creative Designer', title: 'The honored princess', group: 'crew', cats: ['design'] },
  { name: 'Lain', file: 'Lain.png', role: 'Miahou.AI,Hacker', title: 'The Honored Cat/Boy', group: 'crew', cats: ['info'] },
  { name: 'Zanarelkov', file: 'Zanarelkov.png', role: 'Hacker', title: 'The Shadowy Mastermind', group: 'crew', cats: ['info']},
    { name: 'Cocolennon', file: 'Cocolennon.png', role: 'Developer', title: 'The sage', group: 'crew', cats: ['info'] },
    { name: 'Mikky', file: 'Mikky.gif', role: 'Creative Designer', title: 'The queen', group: 'crew', cats: ['design'] },
    { name: 'Sparrow', file: 'Sparrow.png', role: 'Developer', title: 'The Instructor', group: 'crew', cats: ['info'] },
    { name: 'Sunny', file: 'Sunny.png', role: 'Designer', title: 'The stupid brother', group: 'crew', cats: ['design'] },
    { name: 'Swammy', file: 'Swammy.jpg', role: 'Sys Admin', title: 'The cool sister', group: 'crew', cats: ['info'] },
  { name: 'Hc', file: 'Hc.jpg', role: 'Slave of Alcool', title: 'The SysSlav', group: 'crew', cats: ['autre']},
  { name: 'Jacky', file: 'Jacky.jpeg', role: 'Designer', title: 'The idiot of crew', group: 'crew', cats: ['design'] },

];

// Ordre d'affichage des filtres ; chaque clé a sa traduction 'cat.<clé>'
const CATEGORIES = ['design', 'info', 'gaming', 'autre'];

// ---------- Traductions ----------
const I18N = {
    fr: {
        'meta.title': 'Tsubasa — 総長',
        'meta.description': 'Tsubasa — bannières sous Photoshop, dev full-stack, bots, rice Linux. Je touche à tout en informatique.',
        'aria.home': 'Accueil',
        'aria.menu': 'Menu',
        'aria.lang': 'Langue',
        'aria.terminal': 'Terminal décoratif',
        'aria.preview': 'Aperçu du design',
        'aria.close': 'Fermer',
        'aria.prev': 'Précédent',
        'aria.next': 'Suivant',
        'nav.domains': 'Domaines',
        'nav.designs': 'Designs',
        'nav.code': 'Code',
        'nav.team': 'Moi',
        'nav.contact': 'Contact',
        'hero.eyebrow': '総長 · autodidacte · builder & creator',
        'hero.title': 'Je touche<br>à <em>tout</em>.',
        'hero.lede': `<p>Moi, c'est Tsubasa. Autodidacte, je suis tombé dans l'informatique par curiosité et j'en ai fait mon terrain de jeu. Du développement au design, de Linux aux infrastructures, j'aime comprendre, expérimenter et donner vie à mes idées.</p>
<p>Je ne me limite pas à un domaine : quand quelque chose m'intéresse, je vais jusqu'au bout.</p>`,
        'hero.quote': '« Personne ne voit tout le travail derrière ce qui paraît simple. »',
        'hero.cta': 'Ce que je fais',
        'hero.contact': 'Me contacter',
        'hero.alt': 'Sano Manjirō (Mikey), de dos',
        'hero.caption': "Mikey — l'icône",
        'domains.title': 'Domaines',
        'domains.lede': 'Pas une spécialité, un terrain de jeu. Voilà où je traîne.',
        'd1.text': 'Bannières Discord, PP et miniatures, montées sous Photoshop : compo, light, typo, effets.',
        'd1.banners': 'Bannières 3000×1000',
        'd1.thumbs': 'Miniatures',
        'd1.link': 'voir les créas',
        'd2.text': 'Du back au front, en passant par les API. TypeScript au quotidien, Go et Rust pour ce qui doit aller vite.',
        'd3.text': "Bots Discord et Telegram, outils d'automatisation, scripts d'init pour les serveurs de la commu.",
        'd4.text': 'CachyOS sous Hyprland, rice maison en Quickshell, Neovim réglé aux petits oignons.',
        'd5.title': 'Infra & sécu',
        'd5.text': "Conteneurs, bases de données, et l'œil pour repérer la clé laissée sous le paillasson.",
        'designs.lede': 'Bannières, PP et miniatures, faites sous Photoshop. Clique pour ouvrir en grand.',
        'code.lede': 'Mes dépôts publics, chargés en direct depuis GitHub.',
        'code.repos': 'dépôts',
        'code.stars': 'étoiles',
        'code.ihorizon': 'Contributeur sur <a href="https://github.com/iHorizon" target="_blank" rel="noopener">iHorizon</a>.',
        'code.loading': 'chargement des dépôts…',
        'code.empty': 'aucun dépôt public pour le moment.',
        'code.noDesc': 'Pas de description.',
        'code.error': 'impossible de joindre GitHub —',
        'code.errorLink': 'voir le profil directement',
        'team.title': 'Moi',
        'team.lede': 'Mon profil et ce que j\'apporte à chaque projet.',
        'friends.title': 'Le crew',
        'friends.lede': "Ceux avec qui je construis tout ça, dans l'ombre.",
        'people.empty': 'personne ici pour le moment.',
        'people.all': 'Tous',
        'people.crew': 'Le crew',
        'people.seeAll': 'Tout voir',
        'people.scroll': 'Défiler',
        'dossier.file': 'Dossier membre',
        'dossier.member': 'Membre',
        'dossier.role': 'Rôle',
        'dossier.classified': 'confidentiel',
        'dossier.rank': 'Rang',
        'dossier.alias': 'Surnom',
        'dossier.fields': 'Domaines',
        'dossier.status': 'Statut',
        'dossier.active': 'Actif',
        'dossier.notes': 'Notes',
        'team.leadText': `<p>Autodidacte et passionné par la technologie, je construis mes projets de l'idée à la réalisation. Développement web, applications, automatisation, infrastructure ou design : j'aime explorer, apprendre et trouver des solutions concrètes aux problèmes.</p>
<p>À travers des projets comme Vybe et Clarity Studio, j'ai développé une approche polyvalente, mêlant technique, créativité et gestion de projets. Je privilégie l'autonomie, la rigueur et les solutions pensées pour durer.</p>
<p>Je ne cherche pas simplement à utiliser les technologies, mais à comprendre comment elles fonctionnent et ce qu'il est possible d'en faire.</p>`,
        'cat.design': 'Design',
        'cat.info': 'Info',
        'cat.gaming': 'Gaming',
        'cat.autre': 'Autre',
        'aria.filter': 'Filtrer par catégorie',
        'nav.friends': 'Crew',
        'contact.title': 'On parle ?',
        'contact.lede': 'Une bannière, un projet, ou juste rejoindre la commu : choisis ton canal.',
        'contact.dm': 'Message privé',
        'contact.server': 'Serveur Discord',
        'contact.copy': 'copier',
        'contact.copied': 'copié ✓',
        'contact.join': 'rejoindre',
        'footer.top': 'retour en haut ↑',
        'mikey': [
            "無敵のマイキー — Mikey t'offre un dorayaki.",
            'Bab est garée devant. On part en ride ?',
            'Le Toman ne recule pas. Clarity non plus.'
        ]
    },
    en: {
        'meta.title': 'Tsubasa — 総長',
        'meta.description': 'Tsubasa — Photoshop banners, full-stack dev, bots, Linux ricing. If it runs on a computer, I touch it.',
        'aria.home': 'Home',
        'aria.menu': 'Menu',
        'aria.lang': 'Language',
        'aria.terminal': 'Decorative terminal',
        'aria.preview': 'Design preview',
        'aria.close': 'Close',
        'aria.prev': 'Previous',
        'aria.next': 'Next',
        'nav.domains': 'Fields',
        'nav.designs': 'Designs',
        'nav.code': 'Code',
        'nav.team': 'Me',
        'nav.contact': 'Contact',
        'hero.eyebrow': '総長 · self-taught · builder & creator',
        'hero.title': 'I touch<br>it <em>all</em>.',
        'hero.lede': `<p>I'm Tsubasa. Self-taught, I got into computers out of curiosity and turned them into my playground. From development to design, from Linux to infrastructure, I love to understand, experiment and bring my ideas to life.</p>
<p>I don't limit myself to one field: when something interests me, I see it through to the end.</p>`,
        'hero.quote': '“No one sees all the work behind what looks simple.”',
        'hero.cta': 'What I do',
        'hero.contact': 'Contact me',
        'hero.alt': 'Sano Manjiro (Mikey), seen from behind',
        'hero.caption': 'Mikey — the icon',
        'domains.title': 'Fields',
        'domains.lede': "Not a specialty, a playground. Here's where I hang out.",
        'd1.text': 'Discord banners, profile pictures and thumbnails, made in Photoshop: composition, lighting, type, effects.',
        'd1.banners': '3000×1000 banners',
        'd1.thumbs': 'Thumbnails',
        'd1.link': 'see the work',
        'd2.text': 'Back to front, APIs in between. TypeScript every day, Go and Rust when it needs to be fast.',
        'd3.text': 'Discord and Telegram bots, automation tools, init scripts for community servers.',
        'd4.text': 'CachyOS on Hyprland, a custom Quickshell rice, and a finely tuned Neovim.',
        'd5.title': 'Infra & security',
        'd5.text': 'Containers, databases, and an eye for the key left under the doormat.',
        'designs.lede': 'Banners, profile pictures and thumbnails, made in Photoshop. Click to open full size.',
        'code.lede': 'My public repositories, loaded live from GitHub.',
        'code.repos': 'repos',
        'code.stars': 'stars',
        'code.ihorizon': 'Contributor to <a href="https://github.com/iHorizon" target="_blank" rel="noopener">iHorizon</a>.',
        'code.loading': 'loading repositories…',
        'code.empty': 'no public repositories yet.',
        'code.noDesc': 'No description.',
        'code.error': "can't reach GitHub —",
        'code.errorLink': 'see the profile directly',
        'team.title': 'Me',
        'team.lede': 'My profile and what I bring to every project.',
        'friends.title': 'The crew',
        'friends.lede': 'The people I build all this with, in the shadows.',
        'people.empty': 'nobody here yet.',
        'people.all': 'All',
        'people.crew': 'The crew',
        'people.seeAll': 'See all',
        'people.scroll': 'Scroll',
        'dossier.file': 'Member file',
        'dossier.member': 'Member',
        'dossier.role': 'Role',
        'dossier.classified': 'classified',
        'dossier.rank': 'Rank',
        'dossier.alias': 'Alias',
        'dossier.fields': 'Fields',
        'dossier.status': 'Status',
        'dossier.active': 'Active',
        'dossier.notes': 'Notes',
        'team.leadText': `<p>Self-taught and passionate about technology, I take my projects from idea to delivery. Web development, applications, automation, infrastructure or design: I love to explore, learn and find concrete solutions to problems.</p>
<p>Through projects like Vybe and Clarity Studio, I've built a versatile approach that blends technical skills, creativity and project management. I value autonomy, rigor and solutions built to last.</p>
<p>I don't just want to use technologies — I want to understand how they work and what they make possible.</p>`,
        'cat.design': 'Design',
        'cat.info': 'IT',
        'cat.gaming': 'Gaming',
        'cat.autre': 'Other',
        'aria.filter': 'Filter by category',
        'nav.friends': 'Crew',
        'contact.title': "Let's talk",
        'contact.lede': 'A banner, a project, or just joining the community: pick your channel.',
        'contact.dm': 'Direct message',
        'contact.server': 'Discord server',
        'contact.copy': 'copy',
        'contact.copied': 'copied ✓',
        'contact.join': 'join',
        'footer.top': 'back to top ↑',
        'mikey': [
            '無敵のマイキー — Mikey hands you a dorayaki.',
            "Bab is parked outside. Going for a ride?",
            "Toman never backs down. Neither does Clarity."
        ]
    }
};

let lang = 'fr';
let reposCache = null;
const t = (key) => I18N[lang][key] ?? I18N.fr[key] ?? key;

const LANG_COLORS = {
    JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', HTML: '#e34c26',
    CSS: '#663399', Java: '#b07219', 'C++': '#f34b7d', C: '#555555', 'C#': '#178600',
    Go: '#00ADD8', Rust: '#dea584', PHP: '#4F5D95', Shell: '#89e051', Lua: '#5a6fd6',
    QML: '#44a51c', SCSS: '#c6538c'
};

document.addEventListener('DOMContentLoaded', () => {
    renderPeople();
    initLang();
    initHeader();
    renderDesigns();
    initLightbox();
    initCopyButtons();
    loadRepos();
    initReveal();
    initMikey();
    document.getElementById('year').textContent = new Date().getFullYear();
});

// ---------- Utils ----------
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

const thumbOf = (file) => `${DESIGNS_DIR}thumbs/${file.replace(/\.png$/i, '.webp')}`;

// ---------- Langue ----------
function initLang() {
    let saved = null;
    try { saved = localStorage.getItem('lang'); } catch {}
    const browser = (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
    setLang(I18N[saved] ? saved : browser);

    document.querySelectorAll('[data-lang]').forEach((btn) => {
        btn.addEventListener('click', () => {
            setLang(btn.dataset.lang);
            try { localStorage.setItem('lang', lang); } catch {}
        });
    });
}

function setLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]').content = t('meta.description');

    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll('[data-lang]').forEach((btn) => btn.setAttribute('aria-pressed', btn.dataset.lang === lang));

    // Contenu généré en JS
    document.querySelectorAll('[data-role-key]').forEach((el) => { el.textContent = t(el.dataset.roleKey); });
    if (reposCache) renderRepos(reposCache);
}

// ---------- Header / navigation ----------
function initHeader() {
    const header = document.querySelector('.site-header');
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');

    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    }));

    // Lien actif selon la section visible
    const links = new Map([...nav.querySelectorAll('a')].map((a) => [a.getAttribute('href').slice(1), a]));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((a) => a.classList.remove('active'));
            links.get(entry.target.id)?.classList.add('active');
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach((_, id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}

// ---------- Designs ----------
function renderDesigns() {
    const gallery = document.getElementById('gallery');
    document.getElementById('designs-count').textContent = DESIGNS.length;

    DESIGNS.forEach((design, index) => {
        const shot = document.createElement('button');
        shot.type = 'button';
        shot.className = 'shot reveal' + (index === 0 ? ' featured' : '') + (design.fit === 'contain' ? ' contain' : '');
        shot.innerHTML = `
            <img src="${thumbOf(design.file)}" alt="${escapeHTML(design.name)}" loading="${index < 3 ? 'eager' : 'lazy'}" decoding="async">
            <span class="shot-meta"><span>${escapeHTML(design.name)}</span><span>${String(index + 1).padStart(2, '0')}</span></span>
        `;
        shot.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(shot);
    });
}

// ---------- Lightbox ----------
let lbIndex = 0;
let lbReturnFocus = null;

function initLightbox() {
    const lb = document.getElementById('lightbox');
    document.getElementById('lb-close').addEventListener('click', closeLightbox);
    document.getElementById('lb-prev').addEventListener('click', () => showDesign(lbIndex - 1));
    document.getElementById('lb-next').addEventListener('click', () => showDesign(lbIndex + 1));
    lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
        if (lb.hidden) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showDesign(lbIndex - 1);
        if (e.key === 'ArrowRight') showDesign(lbIndex + 1);
    });
}

function showDesign(index) {
    lbIndex = (index + DESIGNS.length) % DESIGNS.length;
    const design = DESIGNS[lbIndex];
    const img = document.getElementById('lb-img');
    // Affiche d'abord la miniature déjà en cache, puis l'original en pleine résolution
    img.src = thumbOf(design.file);
    img.alt = design.name;
    const full = new Image();
    full.onload = () => { if (DESIGNS[lbIndex] === design) img.src = full.src; };
    full.src = DESIGNS_DIR + design.file;
    document.getElementById('lb-caption').textContent = design.name;
    document.getElementById('lb-pos').textContent = `${lbIndex + 1} / ${DESIGNS.length}`;
}

function openLightbox(index) {
    lbReturnFocus = document.activeElement;
    showDesign(index);
    document.getElementById('lightbox').hidden = false;
    document.body.classList.add('no-scroll');
    document.getElementById('lb-close').focus();
}

function closeLightbox() {
    document.getElementById('lightbox').hidden = true;
    document.body.classList.remove('no-scroll');
    lbReturnFocus?.focus();
}

// ---------- Équipe & Potes ----------
const catBadges = (cats) => cats.map((c) => `<span class="cat cat-${c} mono" data-i18n="cat.${c}"></span>`).join('');
const roleTag = (person, cls) => person.roleKey
    ? `<p class="${cls}" data-role-key="${person.roleKey}"></p>`
    : `<p class="${cls}">${escapeHTML(person.role)}</p>`;

// Fiche « dossier de membre » du chef
function leadCard(person) {
    const field = (jp, key, value) => `
        <div>
            <dt><span class="jp">${jp}</span><span data-i18n="${key}"></span></dt>
            <dd>${value}</dd>
        </div>
    `;
    return `
        <article class="dossier reveal">
            <svg class="dossier-crest-bg" aria-hidden="true"><use href="#i-crest"/></svg>

            <header class="dossier-top mono">
                <svg class="dossier-crest"><use href="#i-crest"/></svg>
                <span class="dossier-file" data-i18n="dossier.file"></span>
                <span class="dossier-no">No. 001</span>
                <span class="dossier-sep" aria-hidden="true"></span>
                <span class="dossier-ref">TSU-001 · 翼</span>
            </header>

            <div class="dossier-body">
                <p class="dossier-band" aria-hidden="true">天下無敵 · 総長</p>

                <figure class="dossier-portrait">
                    <div class="dossier-photo">
                        <img src="${TEAM_DIR}${person.file}" alt="${escapeHTML(person.name)}" loading="lazy">
                        <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
                    </div>
                    <span class="hanko hanko-sm" aria-hidden="true">総長</span>
                    <figcaption class="mono"><span class="jp">翼</span><span>${escapeHTML(person.name)}</span></figcaption>
                </figure>

                <div class="dossier-info">
                    <span class="dossier-stamp" aria-hidden="true">極秘<small class="mono" data-i18n="dossier.classified"></small></span>
                    <p class="dossier-kana">ツバサ</p>
                    <h3>${escapeHTML(person.name)}</h3>

                    <dl class="dossier-fields">
                        ${field('階級', 'dossier.rank', '総長 <span class="mono">sōchō</span>')}
                        ${field('異名', 'dossier.alias', escapeHTML(person.title))}
                        ${field('専門', 'dossier.fields', `<span class="member-cats">${catBadges(person.cats)}</span>`)}
                        ${field('状態', 'dossier.status', '<span class="status-dot"></span><span data-i18n="dossier.active"></span>')}
                    </dl>

                    <div class="dossier-notes">
                        <p class="dossier-label mono"><span class="jp">備考</span> <span data-i18n="dossier.notes"></span></p>
                        <div class="lead-text" data-i18n-html="team.leadText"></div>
                    </div>
                </div>
            </div>

            <footer class="dossier-bottom mono">
                <span class="barcode" aria-hidden="true"></span>
                <span class="dossier-motto">“I don't chase hype — I absorb skills and craft solutions that last.”</span>
            </footer>
        </article>
    `;
}

// Carte d'identité de membre du crew (même univers que le dossier du chef)
function memberCard(person, index) {
    const no = String(index + 1).padStart(2, '0');
    return `
        <li class="member" data-cats="${person.cats.join(' ')}">
            <article class="member-card">
                <header class="id-top mono">
                    <svg class="id-crest"><use href="#i-crest"/></svg>
                    <span><span class="jp">隊員</span> <span data-i18n="dossier.member"></span></span>
                    <span class="id-no">No. ${no}</span>
                </header>

                <div class="id-photo">
                    <img src="${TEAM_DIR}${person.file}" alt="${escapeHTML(person.name)}" loading="lazy">
                    <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
                </div>

                <div class="id-body">
                    <h3>${escapeHTML(person.name)}</h3>
                    <dl class="id-fields">
                        <div>
                            <dt><span class="jp">役職</span><span data-i18n="dossier.role"></span></dt>
                            ${person.roleKey ? `<dd data-role-key="${person.roleKey}"></dd>` : `<dd>${escapeHTML(person.role)}</dd>`}
                        </div>
                        <div>
                            <dt><span class="jp">異名</span><span data-i18n="dossier.alias"></span></dt>
                            <dd class="id-alias">${escapeHTML(person.title)}</dd>
                        </div>
                    </dl>
                </div>

                <footer class="id-bottom">
                    <span class="member-cats">${catBadges(person.cats)}</span>
                    <span class="barcode barcode-sm" aria-hidden="true"></span>
                </footer>
                <span class="member-glare" aria-hidden="true"></span>
            </article>
        </li>
    `;
}

// Inclinaison 3D qui suit la souris (purement visuel, ne bouge pas la mise en page)
function initTilt(grid) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    grid.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const card = e.target.closest('.member-card');
        if (!card) return;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--ry', `${(x - .5) * 14}deg`);
        card.style.setProperty('--rx', `${(.5 - y) * 14}deg`);
        card.style.setProperty('--mx', `${x * 100}%`);
        card.style.setProperty('--my', `${y * 100}%`);
    });
    grid.addEventListener('pointerout', (e) => {
        const card = e.target.closest('.member-card');
        if (card && !card.contains(e.relatedTarget)) {
            card.style.removeProperty('--rx');
            card.style.removeProperty('--ry');
        }
    });
}

// Carrousel avec boutons ‹ ›, et bouton « Tout voir » pour passer en grille
function initCarousel(bar, grid) {
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';
    controls.innerHTML = `
        <span class="carousel-count mono"></span>
        <button type="button" class="lb-btn carousel-btn" data-dir="-1" data-i18n-aria="aria.prev"><svg><use href="#i-left"/></svg></button>
        <button type="button" class="lb-btn carousel-btn" data-dir="1" data-i18n-aria="aria.next"><svg><use href="#i-right"/></svg></button>
        <button type="button" class="chip mono carousel-view" aria-pressed="false" data-i18n="people.seeAll"></button>
    `;
    bar.appendChild(controls);

    const count = controls.querySelector('.carousel-count');
    const [prev, next] = controls.querySelectorAll('.carousel-btn');
    const view = controls.querySelector('.carousel-view');

    const visible = () => [...grid.querySelectorAll('.member:not([hidden])')];
    const update = () => {
        const items = visible();
        const box = grid.getBoundingClientRect();
        const shown = items.filter((m) => {
            const r = m.getBoundingClientRect();
            return r.left >= box.left - 2 && r.right <= box.right + 2;
        });
        const first = items.indexOf(shown[0]) + 1;
        const last = items.indexOf(shown[shown.length - 1]) + 1;
        const pad = (n) => String(n).padStart(2, '0');
        const range = first === last ? pad(first) : `${pad(first)}–${pad(last)}`;
        count.textContent = shown.length ? `${range} / ${pad(items.length)}` : '';
        prev.disabled = grid.scrollLeft <= 2;
        next.disabled = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 2;
        controls.classList.toggle('no-scroll', prev.disabled && next.disabled);
    };

    controls.addEventListener('click', (e) => {
        const btn = e.target.closest('.carousel-btn');
        if (btn) grid.scrollBy({ left: Number(btn.dataset.dir) * grid.clientWidth, behavior: 'smooth' });
    });
    view.addEventListener('click', () => {
        const isGrid = grid.classList.toggle('is-grid');
        controls.classList.toggle('is-grid', isGrid);
        view.setAttribute('aria-pressed', isGrid);
        view.dataset.i18n = isGrid ? 'people.scroll' : 'people.seeAll';
        view.textContent = t(view.dataset.i18n);
        grid.scrollLeft = 0;
        update();
    });
    grid.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const reset = () => { grid.scrollLeft = 0; update(); };
    requestAnimationFrame(update);
    return reset;
}

function renderPeople() {
    document.querySelectorAll('.people').forEach((section) => {
        const people = PEOPLE.filter((p) => p.group === section.dataset.group);
        const lead = people.find((p) => p.lead);
        const crew = people.filter((p) => !p.lead);
        const grid = section.querySelector('.team');
        const bar = section.querySelector('.crew-bar');
        const filters = section.querySelector('.filters');

        // Le chef en haut, puis une séparation avant le reste du crew
        if (lead) {
            grid.insertAdjacentHTML('beforebegin', leadCard(lead));
            section.querySelector('.dossier').after(bar);
        } else {
            bar.querySelector('.crew-label').remove();
            bar.classList.add('crew-bar--solo');
        }

        if (!crew.length) {
            if (lead) {
                bar.remove();
                grid.remove();
                return;
            }
            grid.innerHTML = '<li class="people-empty mono" data-i18n="people.empty"></li>';
            filters.remove();
            return;
        }
        grid.innerHTML = crew.map(memberCard).join('');
        grid.classList.add('carousel');
        initTilt(grid);
        const resetCarousel = initCarousel(bar, grid);

        // Filtres : seulement s'il y a au moins 2 catégories dans le crew
        const used = CATEGORIES.filter((c) => crew.some((p) => p.cats.includes(c)));
        if (used.length < 2) {
            filters.remove();
            return;
        }
        filters.innerHTML = ['all', ...used].map((c) => `
            <button type="button" class="chip mono" data-filter="${c}" aria-pressed="${c === 'all'}"
                data-i18n="${c === 'all' ? 'people.all' : `cat.${c}`}"></button>
        `).join('');
        filters.addEventListener('click', (e) => {
            const chip = e.target.closest('[data-filter]');
            if (!chip) return;
            const cat = chip.dataset.filter;
            filters.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', b === chip));
            grid.querySelectorAll('.member').forEach((m) => {
                m.hidden = cat !== 'all' && !m.dataset.cats.split(' ').includes(cat);
            });
            resetCarousel();
        });
    });
}

// ---------- GitHub ----------
async function loadRepos() {
    const list = document.getElementById('repo-list');
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`);
        if (!res.ok) throw new Error(`GitHub ${res.status}`);
        const repos = await res.json();

        const sum = (key) => repos.reduce((n, r) => n + r[key], 0);
        document.getElementById('repos-count').textContent = repos.length;
        document.getElementById('stars-count').textContent = sum('stargazers_count');
        document.getElementById('forks-count').textContent = sum('forks_count');

        reposCache = repos.filter((r) => !r.fork && !r.archived);
        renderRepos(reposCache);
    } catch (err) {
        console.error(err);
        list.innerHTML = `<li class="repo-empty mono">${t('code.error')} <a href="https://github.com/${GITHUB_USER}" style="color:var(--gold)">${t('code.errorLink')}</a>.</li>`;
    }
}

function renderRepos(repos) {
    const list = document.getElementById('repo-list');
    if (!repos.length) {
        list.innerHTML = `<li class="repo-empty mono">${t('code.empty')}</li>`;
        return;
    }

    list.innerHTML = repos.map((repo) => `
        <li>
            <a class="repo" href="${escapeHTML(repo.homepage || repo.html_url)}" target="_blank" rel="noopener">
                <span class="repo-name">${escapeHTML(repo.name)} <svg><use href="#i-arrow"/></svg></span>
                <p class="repo-desc">${escapeHTML(repo.description || t('code.noDesc'))}</p>
                <span class="repo-meta mono">
                    ${repo.language ? `<span><i class="lang-dot" style="background:${LANG_COLORS[repo.language] || '#8b949e'}"></i>${escapeHTML(repo.language)}</span>` : ''}
                    <span><svg><use href="#i-star"/></svg>${repo.stargazers_count}</span>
                    <span>${formatDate(repo.pushed_at)}</span>
                </span>
            </a>
        </li>
    `).join('');
}

function formatDate(iso) {
    return new Date(iso).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { month: 'short', year: 'numeric' });
}

// ---------- Copier le pseudo Discord ----------
function initCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach((btn) => {
        const label = btn.querySelector('.link-action span');
        btn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(btn.dataset.copy);
                label.textContent = t('contact.copied');
            } catch {
                label.textContent = btn.dataset.copy;
            }
            btn.classList.add('copied');
            setTimeout(() => {
                btn.classList.remove('copied');
                label.textContent = t('contact.copy');
            }, 1800);
        });
    });
}

// ---------- Apparition au scroll ----------
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('in'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => observer.observe(el));
}

// ---------- Easter egg : tape « mikey » ----------
function initMikey() {
    const secret = 'mikey';
    const toast = document.getElementById('toast');
    let buffer = '';
    let count = 0;
    let timer;

    document.addEventListener('keydown', (e) => {
        if (e.target.closest('input, textarea') || e.key.length !== 1) return;
        buffer = (buffer + e.key.toLowerCase()).slice(-secret.length);
        if (buffer !== secret) return;
        const lines = t('mikey');
        toast.textContent = lines[count++ % lines.length];
        toast.hidden = false;
        clearTimeout(timer);
        timer = setTimeout(() => { toast.hidden = true; }, 3200);
    });
}
