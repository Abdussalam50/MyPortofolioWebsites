document.addEventListener('DOMContentLoaded', () => {
    /* ===== MOBILE MENU ===== */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('fixed');
        navLinks.classList.toggle('inset-0');
        navLinks.classList.toggle('bg-dark');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('justify-center');
        navLinks.classList.toggle('items-center');
        navLinks.classList.toggle('z-50');
        hamburger.classList.toggle('active');
    });

    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    /* ===== SCROLL EFFECTS ===== */
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        // Navbar scrolled state
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
    });

    /* ===== TYPING ANIMATION ===== */
    const typingText = document.getElementById('typingText');
    const roles = ['Full Stack Developer', 'PHP/Laravel Specialist', 'React & Tailwind Expert', 'Backend Architect'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();

    /* ===== SCROLL REVEAL ===== */
    const reveals = document.querySelectorAll('.reveal');
    const skillFills = document.querySelectorAll('.skill-fill');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');

                // If it's a stats section, trigger counter
                if (el.classList.contains('stats-grid')) {
                    animateStats();
                }

                // If it's a skills section, trigger bars
                if (el.classList.contains('skills-category')) {
                    el.querySelectorAll('.skill-fill').forEach(fill => {
                        fill.style.width = fill.getAttribute('data-w') + '%';
                    });
                }
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    /* ===== STATS COUNTER ===== */
    let statsDone = false;
    function animateStats() {
        if (statsDone) return;
        statsDone = true;
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const update = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(update);
                } else {
                    stat.textContent = target;
                }
            };
            update();
        });
    }

    /* ===== PARTICLES BACKGROUND ===== */
    const canvas = document.getElementById('particlesCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(123, 47, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    /* ===== PROJECT FILTERS ===== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active btn
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    /* ===== CONTACT FORM HANDLING ===== */
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const sendBtn = document.getElementById('sendBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            sendBtn.disabled = true;

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const result = await response.json();

                if (response.status === 200) {
                    contactForm.reset();
                    formSuccess.style.display = 'block';
                    formSuccess.innerHTML = '<i class="fas fa-check-circle"></i> Message sent! I\'ll get back to you soon.';
                    formSuccess.classList.replace('bg-red-500/10', 'bg-green-500/10');
                    formSuccess.classList.replace('border-red-500/20', 'border-green-500/20');
                    formSuccess.classList.replace('text-red-400', 'text-green-400');
                } else {
                    console.log(result);
                    formSuccess.style.display = 'block';
                    formSuccess.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + (result.message || 'Something went wrong!');
                    formSuccess.classList.replace('bg-green-500/10', 'bg-red-500/10');
                    formSuccess.classList.replace('border-green-500/20', 'border-red-500/20');
                    formSuccess.classList.replace('text-green-400', 'text-red-400');
                }
            } catch (error) {
                console.log(error);
                formSuccess.style.display = 'block';
                formSuccess.textContent = "Something went wrong!";
            } finally {
                sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                sendBtn.disabled = false;
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }

    /* ===== THEME TOGGLE ===== */
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    let isDark = true;

    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        if (isDark) {
            body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    /* ===== BACK TO TOP ===== */
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ===== VIDEO MODAL LOGIC ===== */
    const videoModal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    const closeModal = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const demoBtns = document.querySelectorAll('.demo-btn');

    function getYouTubeEmbedUrl(url) {
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1].split('&')[0];
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        } else if (url.includes('youtube.com/embed/')) {
            videoId = url.split('embed/')[1].split('?')[0];
        }

        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }

    if (videoModal && videoContainer) {
        demoBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const videoUrl = btn.getAttribute('data-video');
                
                // Check if it's a YouTube link or local file
                let content = '';
                if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                    const embedUrl = getYouTubeEmbedUrl(videoUrl);
                    const separator = embedUrl.includes('?') ? '&' : '?';
                    content = `<iframe class="w-full h-full" src="${embedUrl}${separator}autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                } else {
                    content = `<video class="w-full h-full" controls autoplay><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
                }

                videoContainer.innerHTML = content;
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scroll
            });
        });

        const closeFunc = () => {
            videoModal.classList.remove('active');
            videoContainer.innerHTML = ''; // Stop video
            document.body.style.overflow = ''; // Enable scroll
        };

        closeModal.addEventListener('click', closeFunc);
        modalOverlay.addEventListener('click', closeFunc);
        
        // Close on Esc key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeFunc();
            }
        });
    }

    /* ===== CV MODAL LOGIC ===== */
    const cvModal = document.getElementById('cvModal');
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    const closeCvModal = document.querySelector('.close-cv-modal');
    const cvModalOverlay = cvModal ? cvModal.querySelector('.modal-overlay') : null;

    if (cvModal && downloadCvBtn) {
        downloadCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cvModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeCvFunc = () => {
            cvModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (closeCvModal) closeCvModal.addEventListener('click', closeCvFunc);
        if (cvModalOverlay) cvModalOverlay.addEventListener('click', closeCvFunc);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cvModal.classList.contains('active')) {
                closeCvFunc();
            }
        });
    }
});
