document.addEventListener('DOMContentLoaded', () => {
    // ===== CURSEUR PERSONNALISÉ =====
    const cursor = document.querySelector('.cursor');

    if (cursor) {
        // Position initiale du curseur
        cursor.style.opacity = '0';

        // Animation du curseur
        document.addEventListener('mousemove', (e) => {
            // Utilisation de transform au lieu de left/top pour de meilleures performances
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursor.style.opacity = '1';
        });

        // Effet sur les éléments interactifs
        const interactiveElements = document.querySelectorAll('a, button, .design-item, .team-member, .skills-tags span, .social-link');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-grow');
                element.classList.add('hovered');
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-grow');
                element.classList.remove('hovered');
            });
        });
    }

    // ===== EFFET GLITCH SUR LE TITRE =====
    const glitchElement = document.querySelector('.glitch');

    if (glitchElement) {
        // Création de l'effet glitch avec des pseudo-éléments
        const glitchText = glitchElement.textContent;
        glitchElement.setAttribute('data-text', glitchText);

        // Animation glitch périodique
        const triggerGlitch = () => {
            glitchElement.classList.add('glitch-active');

            setTimeout(() => {
                glitchElement.classList.remove('glitch-active');
            }, 500);
        };

        // Déclenchement initial
        setTimeout(triggerGlitch, 1000);

        // Déclenchement périodique
        setInterval(triggerGlitch, 5000);
    }

    // ===== NAVIGATION FLUIDE =====
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Ajout d'un offset pour tenir compte du header fixe
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Mise à jour de l'URL sans rechargement
                history.pushState(null, null, targetId);
            }
        });
    });




    // ===== EFFET PARALLAXE SUR LA SECTION HERO =====


    // ===== ANIMATION DU TEXTE DE CONTACT - DÉSACTIVÉ =====
    // const contactText = document.querySelector('.contact-text');

    // if (contactText) {
    //     const paragraphs = contactText.querySelectorAll('p');

    //     // Masquer initialement les paragraphes
    //     paragraphs.forEach(p => {
    //         p.style.opacity = '0';
    //         p.style.transform = 'translateX(-20px)';
    //     });

    //     // Fonction d'animation
    //     const revealText = (entries, observer) => {
    //         if (entries[0].isIntersecting) {
    //             paragraphs.forEach((paragraph, index) => {
    //                 setTimeout(() => {
    //                     paragraph.style.opacity = '1';
    //                     paragraph.style.transform = 'translateX(0)';
    //                 }, 200 * index);
    //             });

    //             observer.unobserve(contactText);
    //         }
    //     };

    //     // Création de l'observateur
    //     const textObserver = new IntersectionObserver(revealText, {
    //         threshold: 0.5
    //     });

    //     // Observation du conteneur
    //     textObserver.observe(contactText);
    // }

    // ===== ANIMATION DES ÉLÉMENTS AU SURVOL =====
    const addHoverEffects = () => {
        // Animation des boutons
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-5px)';
                button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        });

        // Animation des cartes de design
        const designItems = document.querySelectorAll('.design-item');

        designItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const overlay = item.querySelector('.design-overlay');
                if (overlay) {
                    overlay.style.opacity = '1';
                }
            });

            item.addEventListener('mouseleave', () => {
                const overlay = item.querySelector('.design-overlay');
                if (overlay) {
                    overlay.style.opacity = '0.7';
                }
            });
        });
    };

    addHoverEffects();

    // ===== AJOUT DE STYLES CSS DYNAMIQUES =====
    const addDynamicStyles = () => {
        // Création d'une feuille de style
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';

        // Ajout des règles CSS
        styleSheet.textContent = `
            .cursor {
                transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
            }
            
            .cursor-grow {
                transform: translate(-50%, -50%) scale(2) !important;
                background-color: rgba(255, 255, 255, 0.1) !important;
                mix-blend-mode: difference;
            }
            
            .section-hidden {
                opacity: 0;
                transform: translateY(50px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .section-visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .hovered {
                transform: scale(1.05);
                transition: transform 0.3s ease;
            }
            
            .glitch-active {
                animation: glitch 0.5s linear;
            }
            
            @keyframes glitch {
                0% {
                    transform: translate(0);
                }
                20% {
                    transform: translate(-5px, 5px);
                }
                40% {
                    transform: translate(-5px, -5px);
                }
                60% {
                    transform: translate(5px, 5px);
                }
                80% {
                    transform: translate(5px, -5px);
                }
                100% {
                    transform: translate(0);
                }
            }
            
            .skills-tags span {
                transition: opacity 0.5s ease, transform 0.5s ease;
                transform: translateY(20px);
            }
            
            .soft-skill {
                transition: opacity 0.5s ease, transform 0.5s ease;
                transform: translateX(-20px);
            }
            
            .project-item, .design-item, .team-member {
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .contact-text p {
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
        `;

        // Ajout de la feuille de style au document
        document.head.appendChild(styleSheet);
    };

    addDynamicStyles();
});

// Gestion de la modal pour les designs
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('designModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeModal = document.querySelector('.close-modal');

  // Ouvrir la modal au clic sur les boutons "Voir le produit"
  const designBtns = document.querySelectorAll('.design-btn');

  designBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = this.getAttribute('href');
      const title = this.closest('.design-card').querySelector('.design-title').textContent;

      modal.style.display = 'flex';
      modalImg.src = imgSrc;
      modalCaption.textContent = title;

      // Empêcher le défilement de la page
      document.body.style.overflow = 'hidden';
    });
  });

  // Fermer la modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Fermer la modal en cliquant en dehors de l'image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Fermer la modal avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// Ajout d'un effet de particules en arrière-plan
const addParticlesEffect = () => {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-js';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.zIndex = '-1';
    document.body.prepend(particlesContainer);

    // Chargement de la bibliothèque particles.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#0277BD"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#0277BD"
            }
          },
          "opacity": {
            "value": 0.3,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#0277BD",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 0.8
              }
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
    };
    document.body.appendChild(script);
  };

  addParticlesEffect();

// Effet de dévoilement progressif pour les cartes - DÉSACTIVÉ
// const staggeredReveal = () => {
//     const projectCards = document.querySelectorAll('.project-card');
//     const designCards = document.querySelectorAll('.design-card');

//     const revealCards = (cards) => {
//       cards.forEach((card, index) => {
//         card.style.opacity = '0';
//         card.style.transform = 'translateY(50px)';
//         card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         card.style.transitionDelay = `${index * 0.1}s`;
//       });

//       const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//             observer.unobserve(entry.target);
//           }
//         });
//       }, { threshold: 0.1 });

//       cards.forEach(card => observer.observe(card));
//     };

//     revealCards(projectCards);
//     revealCards(designCards);
//   };

//   staggeredReveal();

  // Effet de texte néon clignotant
const addNeonTextEffect = () => {
    const elements = document.querySelectorAll('.neon-text');

    elements.forEach(element => {
      setInterval(() => {
        element.classList.toggle('neon-flicker');
      }, 3000);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    addNeonTextEffect();
  });

  // Effet de déformation 3D au survol
const add3DCardEffect = () => {
    const cards = document.querySelectorAll('.design-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleY = (x - centerX) / 20;
        const angleX = (centerY - y) / 20;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    add3DCardEffect();
  });

  // Effet de surlignage progressif
const addProgressiveHighlight = () => {
    const titles = document.querySelectorAll('.design-title, .project-info h3');

    titles.forEach(title => {
      title.addEventListener('mouseenter', () => {
        title.classList.add('highlight-animation');
      });

      title.addEventListener('mouseleave', () => {
        title.classList.remove('highlight-animation');
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    addProgressiveHighlight();
  });

  // Effet de zoom sur les images de la modal
const addModalZoomEffect = () => {
    const modalImg = document.getElementById('modalImage');

    if (modalImg) {
      let scale = 1;
      let panning = false;
      let pointX = 0;
      let pointY = 0;
      let start = { x: 0, y: 0 };

      modalImg.addEventListener('wheel', (e) => {
        e.preventDefault();
        const xs = (e.clientX - modalImg.offsetLeft) / scale;
        const ys = (e.clientY - modalImg.offsetTop) / scale;

        // Ajuster le facteur de zoom
        const delta = -e.deltaY;
        if (delta > 0) {
          scale *= 1.1;
        } else {
          scale /= 1.1;
        }

        // Limiter le zoom
        scale = Math.min(Math.max(1, scale), 5);

        // Appliquer la transformation
        pointX = xs * scale - e.clientX + modalImg.offsetLeft;
        pointY = ys * scale - e.clientY + modalImg.offsetTop;

        modalImg.style.transform = `translate(${-pointX}px, ${-pointY}px) scale(${scale})`;
      });

      // Permettre le déplacement de l'image zoomée
      modalImg.addEventListener('mousedown', (e) => {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      });

      modalImg.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (!panning) return;

        pointX = e.clientX - start.x;
        pointY = e.clientY - start.y;

        modalImg.style.transform = `translate(${-pointX}px, ${-pointY}px) scale(${scale})`;
      });

      modalImg.addEventListener('mouseup', () => {
        panning = false;
      });

      // Réinitialiser le zoom lorsque la modal se ferme
      const modal = document.getElementById('designModal');
      const closeModal = document.querySelector('.close-modal');

      const resetZoom = () => {
        scale = 1;
        pointX = 0;
        pointY = 0;
        modalImg.style.transform = 'translate(0, 0) scale(1)';
      };

      closeModal.addEventListener('click', resetZoom);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) resetZoom();
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    addModalZoomEffect();
  });


  // Effet de compteur animé
const addCounterEffect = () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 secondes
      const step = target / (duration / 16); // 60 FPS
      let current = 0;

      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            current += step;
            counter.textContent = Math.floor(current);

            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            }
          }, 16);

          observer.unobserve(counter);
        }
      }, { threshold: 0.5 });

      observer.observe(counter);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    addCounterEffect();
  });


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Afficher/masquer le bouton selon la position de scroll
window.addEventListener('scroll', function() {
    const button = document.querySelector('button[onclick="scrollToTop()"]');
    if (window.scrollY > 300) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }
});

// Counter animation
function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 80;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 40);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            if (entry.target.id === 'stats') {
                setTimeout(animateCounter, 300);
            }
        }
    });
}, { threshold: 0.1 });

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        console.log('Mobile menu clicked');
    });
}

// Parallax pour les blobs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.rimuru-blob');
    blobs.forEach((blob, index) => {
        const speed = 0.5 + index * 0.2;
        const yPos = scrolled * speed;
        blob.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});

// Navigation active state
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-rimuru-cyan');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-rimuru-cyan');
        }
    });
});