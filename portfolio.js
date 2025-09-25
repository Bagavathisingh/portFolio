
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

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });

        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                nav.style.background = 'rgba(15, 23, 42, 0.9)';
            }
        });





        const projects = [
        {
            title: "E-Learning Platform",
            description: "A full-stack E-learning platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
            tech: ["React.js", "Javacript", "tailwindcss", "MangoDB","Firebase"],
            liveLink: "https://metastudy.vercel.app",
            githubLink: "https://github.com/Bagavathisingh/metalearn"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            tech: ["React", "Socket.io", "Node.js", "MongoDB"],
            liveLink: "https://task-manger-rust.vercel.app/",
            githubLink: "https://github.com/Bagavathisingh/task-Manger"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
            tech: ["React.js", "Express.js", "Weather API", "Tailwind CSS"],
            liveLink: "https://weather-motion.vercel.app",
            githubLink: "https://github.com/Bagavathisingh/weatherApp"
        }
    ];

    // Select the container
    const projectsContainer = document.querySelector('.projects-grid');

    // Generate project cards dynamically
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" class="project-link">Live Demo</a>
                <a href="${project.githubLink}" class="project-link">GitHub</a>
            </div>
        </div>
    `).join('');