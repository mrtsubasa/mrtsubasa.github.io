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

const TEAM = [
    { name: 'Tsubasa', file: 'Tsubasa.gif', roleKey: 'team.founder', title: 'The honored king', lead: true },
    { name: 'Aelialou', file: 'Aelialou.png', role: 'Creative Designer', title: 'The honored princess' },
    { name: 'Cocolennon', file: 'Cocolennon.png', role: 'Developer', title: 'The sage' },
    { name: 'Mikky', file: 'Mikky.gif', role: 'Creative Designer', title: 'The queen' },
    { name: 'Sparrow', file: 'Sparrow.png', role: 'Developer', title: 'The Instructor' },
    { name: 'Sunny', file: 'Sunny.png', role: 'Designer', title: 'The stupid brother' },
    { name: 'Swammy', file: 'Swammy.jpg', role: 'Sys Admin', title: 'The cool sister' }
];

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
        'nav.team': 'Équipe',
        'nav.contact': 'Contact',
        'hero.eyebrow': 'Clarity · 総長 · fondateur',
        'hero.title': 'Je touche<br>à <em>tout</em>.',
        'hero.lede': "Moi c'est Tsubasa. Bannières montées sous Photoshop, dev full-stack, bots Discord et Telegram, rice Linux, serveurs… Tant que c'est de l'informatique, j'y mets les mains.",
        'hero.quote': '« Personne ne m\'a encore vu à 100 %. »',
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
        'team.title': 'Équipe',
        'team.lede': "Le crew. Ceux avec qui je construis tout ça, dans l'ombre.",
        'team.founder': 'Fondateur',
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
        'nav.team': 'Team',
        'nav.contact': 'Contact',
        'hero.eyebrow': 'Clarity · 総長 · founder',
        'hero.title': 'I touch<br>it <em>all</em>.',
        'hero.lede': "I'm Tsubasa. Banners made in Photoshop, full-stack dev, Discord and Telegram bots, Linux ricing, servers… If it's tech, I get my hands on it.",
        'hero.quote': '“No one has seen me at 100% yet.”',
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
        'team.title': 'Team',
        'team.lede': 'The crew. The people I build all this with, in the shadows.',
        'team.founder': 'Founder',
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
    initLang();
    initHeader();
    renderDesigns();
    initLightbox();
    renderTeam();
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

// ---------- Team ----------
function renderTeam() {
    const grid = document.getElementById('team-grid');
    TEAM.forEach((member) => {
        const li = document.createElement('li');
        li.className = 'member reveal' + (member.lead ? ' lead' : '');
        li.innerHTML = `
            <div class="member-photo"><img src="${TEAM_DIR}${member.file}" alt="${escapeHTML(member.name)}" loading="lazy"></div>
            <h3>${escapeHTML(member.name)}</h3>
            <p class="member-role"${member.roleKey ? ` data-role-key="${member.roleKey}"` : ''}>${escapeHTML(member.roleKey ? t(member.roleKey) : member.role)}</p>
            <span class="member-title mono">${escapeHTML(member.title)}</span>
        `;
        grid.appendChild(li);
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
