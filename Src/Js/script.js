// ==================================================
// FUSION OF LEGENDS - Interactive JavaScript
// Inspired by: Seiya, Ayanokoji, Rimuru, Natsu, Aqua
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
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

    // ========== PROJECTS FILTER ==========
    initProjectsFilter();

    // ========== SCROLL TO TOP ==========
    initScrollToTop();

    // ========== SMOOTH SCROLL ==========
    initSmoothScroll();

    // ========== FORM HANDLING ==========
    initFormHandling();
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

// ========== PROJECTS FILTER ==========
function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
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
