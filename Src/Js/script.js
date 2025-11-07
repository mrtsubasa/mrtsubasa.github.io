// ==================================================
// FUSION OF LEGENDS - Interactive JavaScript
// Inspired by: Seiya, Ayanokoji, Rimuru, Natsu, Aqua
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🔥 DOMContentLoaded - Starting initialization...');

    // ========== CANVAS ANIMATIONS ==========
    initParticlesCanvas();
    initStarsCanvas();
    initConstellationCanvas();

    // ========== NAVIGATION ==========
    initNavigation();

    // ========== SCROLL ANIMATIONS ==========
    initScrollAnimations();

    // ========== SKILLS ANIMATION ==========
    initSkillsBars();

    // ========== STATS COUNTER ==========
    initStatsCounter();

    // ========== SCROLL TO TOP ==========
    initScrollToTop();

    // ========== SMOOTH SCROLL ==========
    initSmoothScroll();

    // ========== FORM HANDLING ==========
    initFormHandling();

    // ========== LOAD GITHUB PROJECTS ==========
    console.log('📦 Loading GitHub projects...');
    loadGitHubProjects();

    // ========== LOAD DESIGNS ==========
    console.log('🎨 Loading designs...');
    loadDesigns();

    // ========== DESIGN MODAL ==========
    initDesignModal();

    // ========== LOAD TEAM ==========
    console.log('👥 Loading team...');
    loadTeam();

    console.log('✅ All initialization complete');
});

// ========== PARTICLES CANVAS (Natsu - Fire) ==========
function initParticlesCanvas() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.color = this.getRandomColor();
        }

        getRandomColor() {
            const colors = [
                'rgba(255, 87, 34, 0.6)',  // Natsu red
                'rgba(255, 152, 0, 0.6)',  // Natsu orange
                'rgba(0, 229, 255, 0.6)',  // Rimuru cyan
                'rgba(255, 215, 0, 0.6)'   // Seiya gold
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========== STARS CANVAS (Aqua - Mystery) ==========
function initStarsCanvas() {
    const canvas = document.getElementById('stars-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const starCount = 100;

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.opacity = Math.random();
            this.speed = Math.random() * 0.02;
        }

        update() {
            this.opacity += this.speed;
            if (this.opacity > 1 || this.opacity < 0) {
                this.speed *= -1;
            }
        }

        draw() {
            ctx.fillStyle = `rgba(186, 104, 200, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========== CONSTELLATION CANVAS (Seiya - Cosmos) ==========
function initConstellationCanvas() {
    const canvas = document.getElementById('constellation-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = [];
    const pointCount = 30;
    const maxDistance = 150;

    class Point {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(255, 215, 0, 0.6)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < pointCount; i++) {
        points.push(new Point());
    }

    function connectPoints() {
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const distance = Math.hypot(
                    points[i].x - points[j].x,
                    points[i].y - points[j].y
                );

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.3;
                    ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateConstellation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        points.forEach(point => {
            point.update();
            point.draw();
        });
        connectPoints();
        requestAnimationFrame(animateConstellation);
    }

    animateConstellation();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========== NAVIGATION ==========
function initNavigation() {
    const header = document.querySelector('.main-header');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    // Observe cards
    const cards = document.querySelectorAll('.project-card, .skill-category, .info-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ========== SKILLS BARS ==========
function initSkillsBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${progress}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// ========== STATS COUNTER ==========
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const duration = 2000;
                    const steps = 60;
                    const stepValue = target / steps;
                    let current = 0;

                    const counter = setInterval(() => {
                        current += stepValue;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(counter);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, duration / steps);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) observer.observe(statsGrid);
}

// ========== GITHUB PROJECTS LOADER ==========
async function loadGitHubProjects() {
    console.log('🔍 loadGitHubProjects() started');
    const username = 'mrtsubasa'; // Votre nom d'utilisateur GitHub
    const projectsContainer = document.getElementById('github-projects');
    const reposCountEl = document.getElementById('repos-count');
    const starsCountEl = document.getElementById('stars-count');
    const forksCountEl = document.getElementById('forks-count');

    console.log('📍 DOM elements:', {
        projectsContainer: !!projectsContainer,
        reposCountEl: !!reposCountEl,
        starsCountEl: !!starsCountEl,
        forksCountEl: !!forksCountEl
    });

    if (!projectsContainer) {
        console.error('❌ github-projects container not found!');
        return;
    }

    try {
        // Récupérer tous les repos
        console.log(`🌐 Fetching repos from GitHub for user: ${username}`);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des projets GitHub');
        }

        const repos = await response.json();
        console.log(`✅ Received ${repos.length} repos from GitHub`);

        // Calculer les statistiques
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

        console.log(`📊 Stats - Repos: ${repos.length}, Stars: ${totalStars}, Forks: ${totalForks}`);

        // Mettre à jour les stats
        if (reposCountEl) reposCountEl.textContent = repos.length;
        if (starsCountEl) starsCountEl.textContent = totalStars;
        if (forksCountEl) forksCountEl.textContent = totalForks;

        // Filtrer les repos (exclure les forks si souhaité)
        const filteredRepos = repos.filter(repo => !repo.fork);
        console.log(`🔍 Filtered to ${filteredRepos.length} non-fork repos`);

        // Clear loading
        projectsContainer.innerHTML = '';
        console.log('🧹 Cleared loading container');

        // Générer les cartes de projets
        filteredRepos.forEach((repo, index) => {
            const languages = repo.language || 'Code';
            const description = repo.description || 'Aucune description disponible';

            // Déterminer le character basé sur le langage
            let character = getCharacterForLanguage(repo.language);

            const projectCard = `
                <div class="project-card" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both;">
                    <div class="project-image">
                        <img src="https://opengraph.githubassets.com/1/${username}/${repo.name}"
                             alt="${repo.name}"
                             onerror="this.src='https://via.placeholder.com/600x400/26C6DA/000?text=${repo.name}'">
                        <div class="project-overlay">
                            <div class="project-icons">
                                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener" class="project-icon"><i class="fas fa-external-link-alt"></i></a>` : ''}
                                <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-icon"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            ${repo.language ? `<span class="project-tag">${repo.language}</span>` : ''}
                            ${repo.topics.slice(0, 3).map(topic => `<span class="project-tag">${topic}</span>`).join('')}
                        </div>
                        <h3 class="project-title">${repo.name}</h3>
                        <p class="project-description">${description}</p>
                        <div class="project-stats">
                            <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                            <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                            ${repo.language ? `<span><i class="fas fa-circle" style="color: ${getLanguageColor(repo.language)}"></i> ${repo.language}</span>` : ''}
                        </div>
                        <div class="project-character">
                            <i class="${character.icon}"></i>
                            <span>${character.text}</span>
                        </div>
                    </div>
                </div>
            `;

            projectsContainer.innerHTML += projectCard;
        });

        console.log(`✅ GitHub projects loaded successfully! Added ${filteredRepos.length} project cards`);

        // Force section to be visible after content is loaded
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.style.opacity = '1';
            projectsSection.style.transform = 'translateY(0)';
        }

    } catch (error) {
        console.error('❌ Error loading GitHub projects:', error);
        projectsContainer.innerHTML = `
            <div class="loading-container">
                <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--natsu-red); margin-bottom: 1rem;"></i>
                <p>Erreur lors du chargement des projets GitHub</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Veuillez vérifier votre connexion internet</p>
            </div>
        `;
    }
}

function getCharacterForLanguage(language) {
    const characters = {
        'JavaScript': { icon: 'fas fa-water', text: 'Adapté comme Rimuru' },
        'TypeScript': { icon: 'fas fa-brain', text: 'Structuré comme Ayanokoji' },
        'Python': { icon: 'fas fa-shield-alt', text: 'Puissant comme Seiya' },
        'HTML': { icon: 'fas fa-fire-alt', text: 'Énergique comme Natsu' },
        'CSS': { icon: 'fas fa-palette', text: 'Créatif comme Natsu' },
        'Java': { icon: 'fas fa-shield-alt', text: 'Robuste comme Seiya' },
        'C++': { icon: 'fas fa-brain', text: 'Calculé comme Ayanokoji' },
        'default': { icon: 'fas fa-star', text: 'Mystérieux comme Aqua' }
    };

    return characters[language] || characters['default'];
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Java': '#b07219',
        'C++': '#f34b7d',
        'Go': '#00ADD8',
        'Rust': '#dea584'
    };

    return colors[language] || '#8b949e';
}

// ========== SCROLL TO TOP ==========
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero scroll indicator
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ========== FORM HANDLING ==========
function initFormHandling() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validation
        if (!name || !email || !subject || !message) {
            alert('Veuillez remplir tous les champs !');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide !');
            return;
        }

        // Success message (in a real app, you would send data to a server)
        alert(`Merci ${name} ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais à ${email}.`);

        // Reset form
        form.reset();
    });

    // Input animation effects
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// ========== MOUSE PARALLAX EFFECT ==========
document.addEventListener('mousemove', (e) => {
    const slimeBlobs = document.querySelectorAll('.slime-blob');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    slimeBlobs.forEach((blob, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ========== HERO TITLE GLITCH EFFECT ==========
const glitchTitle = document.querySelector('.main-title');
if (glitchTitle) {
    setInterval(() => {
        glitchTitle.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 215, 0, 0.7),
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(0, 229, 255, 0.7),
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 87, 34, 0.7)
        `;
        setTimeout(() => {
            glitchTitle.style.textShadow = '';
        }, 50);
    }, 5000);
}

// ========== CURSOR TRAIL EFFECT (Ayanokoji Strategic) ==========
const createCursorTrail = () => {
    const trail = [];
    const trailLength = 10;

    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY });
        if (trail.length > trailLength) {
            trail.shift();
        }
    });

    function animateTrail() {
        trail.forEach((point, index) => {
            const dot = document.createElement('div');
            dot.style.position = 'fixed';
            dot.style.left = point.x + 'px';
            dot.style.top = point.y + 'px';
            dot.style.width = '5px';
            dot.style.height = '5px';
            dot.style.borderRadius = '50%';
            dot.style.background = `rgba(107, 114, 128, ${(index + 1) / trailLength * 0.5})`;
            dot.style.pointerEvents = 'none';
            dot.style.zIndex = '9999';
            document.body.appendChild(dot);

            setTimeout(() => {
                dot.remove();
            }, 100);
        });

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
};

// Uncomment to enable cursor trail
// createCursorTrail();

// ========== LOADING ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== CONSOLE MESSAGE (Easter Egg) ==========
console.log('%c🔥 FUSION OF LEGENDS 🔥', 'color: #FFD700; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);');
console.log('%c⚔️ Seiya | 🧠 Ayanokoji | 💧 Rimuru | 🔥 Natsu | ⭐ Aqua', 'color: #00E5FF; font-size: 14px;');
console.log('%cCe site a été créé avec la détermination de Seiya, la stratégie d\'Ayanokoji, l\'adaptabilité de Rimuru, la passion de Natsu et le mystère d\'Aqua.', 'color: #9C27B0; font-size: 12px; font-style: italic;');
console.log('%cDéveloppé par MrTsubasa', 'color: #6B7280; font-size: 10px;');

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for mouse events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply debounce to resize events
window.addEventListener('resize', debounce(() => {
    console.log('Window resized');
}, 250));

// ========== DESIGNS LOADER ==========
function loadDesigns() {
    console.log('🔍 loadDesigns() started');
    const designsData = [
        { name: 'Aishu Banner', file: 'AishuBannerByTsu.png' },
        { name: 'Coco Final', file: 'Coco_Final.png' },
        { name: 'Coco Final 2', file: 'Coco_Final_2.png' },
        { name: 'Drizz No BS', file: 'Drizz_No_BS.png' },
        { name: 'Esdeath Banner', file: 'EsdeathbannerEirinByTsu.png' },
        { name: 'Gilgamesh Banner', file: 'GilgameshTsuBanner.png' },
        { name: 'Hentai Banner', file: 'HentaiBannerByTsu.png' },
        { name: 'Kira Hiroto Banner', file: 'KiraHirotoBannerTsu.png' },
        { name: 'Kiyo Banner', file: 'Kiyo_Banner.png' },
        { name: 'Lucy Banner', file: 'LucyBannerExemple.png' },
        { name: 'Ma Banner', file: 'MaBannerByMe.png' },
        { name: 'Mianzo Banner', file: 'MianzoBanner.png' },
        { name: 'Yoh Banner', file: 'NewBannerYoh.png' },
        { name: 'Gilgamesh PP', file: 'PpGilgaMeshTsu.png' },
        { name: 'Kaulder Final', file: 'SPOILER_Kaulder_Final.png' },
        { name: 'Drizz Final', file: 'SPOILER_final-drizz.png' },
        { name: 'Ma Banner Final', file: 'SPOILER_final_MaBanner.png' },
        { name: 'Sxjic Banner', file: 'Spoiler_Sxjic-Banner.png' },
        { name: 'Sxjic Trixma', file: 'Spoiler_Sxjic-Trixma.png' },
        { name: 'The World Minia', file: 'TheWorldMinia.png' },
        { name: 'Yoh Asakura Banner', file: 'TsuNewBannerYohAsakura.png' },
        { name: 'Hao Final', file: 'hao_final.png' }
    ];

    const designsGrid = document.getElementById('designs-grid');
    console.log(`📍 designs-grid element found: ${!!designsGrid}`);

    if (!designsGrid) {
        console.error('❌ designs-grid container not found!');
        return;
    }

    console.log(`🎨 Loading ${designsData.length} designs...`);

    designsData.forEach((design, index) => {
        const designCard = document.createElement('div');
        designCard.className = 'design-card';
        designCard.style.animation = `fadeInUp 0.6s ease-out ${index * 0.05}s both`;

        designCard.innerHTML = `
            <div class="design-image-wrapper">
                <img src="./Src/Assets/Images/Designs/${design.file}"
                     alt="${design.name}"
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/600x400/FF5722/fff?text=Image+non+disponible'">
                <div class="design-overlay">
                    <div class="design-name">${design.name}</div>
                    <div class="design-action">
                        <span>Voir en grand</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        `;

        designCard.addEventListener('click', () => {
            openDesignModal(design.name, `./Src/Assets/Images/Designs/${design.file}`);
        });

        designsGrid.appendChild(designCard);
    });

    console.log(`✅ Designs loaded successfully! Added ${designsData.length} design cards`);

    // Force section to be visible after content is loaded
    const designsSection = document.getElementById('designs');
    if (designsSection) {
        designsSection.style.opacity = '1';
        designsSection.style.transform = 'translateY(0)';
    }
}

// ========== DESIGN MODAL ==========
function initDesignModal() {
    const modal = document.getElementById('design-modal');
    const modalClose = document.querySelector('.modal-close');

    // Close modal on click outside or on close button
    modalClose.addEventListener('click', closeDesignModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDesignModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeDesignModal();
        }
    });
}

function openDesignModal(name, imagePath) {
    const modal = document.getElementById('design-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');

    modalImage.src = imagePath;
    modalCaption.textContent = name;
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeDesignModal() {
    const modal = document.getElementById('design-modal');
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// ========== TEAM LOADER ==========
function loadTeam() {
    console.log('🔍 loadTeam() started');
    const teamData = [
        {
            name: 'Tsubasa',
            file: 'Tsubasa.gif',
            role: 'Leader & Founder',
            character: { icon: 'fas fa-shield-alt', text:'The honored king', class: 'character-seiya' }
        },
        {
            name: 'Aelialou',
            file: 'Aelialou.png',
            role: 'Creative Designer',
            character: { icon: 'fas fa-fire-alt', text: 'The honored princess', class: 'character-natsu' }
        },
        {
            name: 'Cocolennon',
            file: 'Cocolennon.png',
            role: 'Developer',
            character: { icon: 'fas fa-water', text: 'The sage', class: 'character-rimuru' }
        },
        {
            name: 'Mikky',
            file: 'Mikky.gif',
            role: 'Creative Designer',
            character: { icon: 'fas fa-star', text: 'The queen', class: 'character-aqua' }
        },
        {
            name: 'Sparrow',
            file: 'Sparrow.png',
            role: 'Developer',
            character: { icon: 'fas fa-brain', text: 'The Instructor', class: 'character-ayanokoji' }
        },
        {
            name: 'Sunny',
            file: 'Sunny.png',
            role: 'Designer',
            character: { icon: 'fas fa-fire-alt', text: 'The stupid brother', class: 'character-natsu' }
        },
        {
            name: 'Swammy',
            file: 'Swammy.jpg',
            role: 'Developer',
            character: { icon: 'fas fa-water', text: 'The cool sister', class: 'character-rimuru' }
        }
    ];

    const teamGrid = document.getElementById('team-grid');
    console.log(`📍 team-grid element found: ${!!teamGrid}`);

    if (!teamGrid) {
        console.error('❌ team-grid container not found!');
        return;
    }

    console.log(`👥 Loading ${teamData.length} team members...`);

    teamData.forEach((member, index) => {
        const teamCard = document.createElement('div');
        teamCard.className = `team-member ${member.character.class}`;
        teamCard.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

        teamCard.innerHTML = `
            <div class="team-member-image">
                <img src="./Src/Assets/Images/Team/${member.file}"
                     alt="${member.name}"
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/150/26C6DA/fff?text=${member.name[0]}'">
            </div>
            <h3 class="team-member-name">${member.name}</h3>
            <p class="team-member-role">${member.role}</p>
            <div class="team-member-character">
                <i class="${member.character.icon}"></i>
                <span>${member.character.text}</span>
            </div>
        `;

        teamGrid.appendChild(teamCard);
    });

    console.log(`✅ Team loaded successfully! Added ${teamData.length} team member cards`);

    // Force section to be visible after content is loaded
    const teamSection = document.getElementById('team');
    if (teamSection) {
        teamSection.style.opacity = '1';
        teamSection.style.transform = 'translateY(0)';
    }
}
