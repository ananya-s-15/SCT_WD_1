//1. DATASETS & CONFIGURATIONS
const coursesData = {
    webdev: {
        title: "Web Development Path",
        desc: "Master front-end engineering using HTML, CSS, modern JavaScript, and React. Learn semantic design, responsive layouts, build scalable applications, and deploy projects to cloud platforms.",
        tech: ["HTML5", "CSS3", "JavaScript ES6+", "React", "Git & GitHub", "Vite", "Tailwind CSS", "Netlify/Vercel"],
        syllabus: [
            { week: "Week 1-3", title: "HTML5, CSS3 & Responsive Design", desc: "Semantic markup, flexbox, CSS Grid, media queries, mobile-first design, and custom theme properties." },
            { week: "Week 4-7", title: "Modern JavaScript (ES6+)", desc: "DOM manipulation, asynchronous code (fetch/async/await), event loops, arrays methods, and storage APIs." },
            { week: "Week 8-10", title: "React Library Core", desc: "Components, props, state, hooks (useState, useEffect, custom), routing, and state management basics." },
            { week: "Week 11-12", title: "Hosting, DevOps & Capstone", desc: "Build optimizations, production bundles, CI/CD pipeline setups, and final project deploy." }
        ]
    },
    ds: {
        title: "Data Science & AI Path",
        desc: "Equip yourself with Python programming, database management, exploratory data analysis, machine learning algorithms, and deep learning neural networks to extract insights from raw data.",
        tech: ["Python", "NumPy", "Pandas", "Matplotlib", "SQL", "Scikit-Learn", "Machine Learning", "Neural Networks"],
        syllabus: [
            { week: "Week 1-4", title: "Python Programming & Databases", desc: "Python variables, control flows, data structures, SQL queries, database connections, and libraries." },
            { week: "Week 5-8", title: "Exploratory Data Analysis", desc: "Cleaning datasets, handling missing values, pandas indexing, groupings, and data visualizations." },
            { week: "Week 9-12", title: "Machine Learning Algorithms", desc: "Supervised & unsupervised learning, linear regressions, decision trees, random forests, and model tuning." },
            { week: "Week 13-16", title: "AI Basics & Capstone Project", desc: "Introduction to neural networks, TensorFlow, computer vision fundamentals, and AI capstone model." }
        ]
    },
    java: {
        title: "Java & DSA Path",
        desc: "Deep dive into object-oriented programming with Java, study essential data structures (trees, graphs, heaps), master algorithmic design paradigms, and solve interview questions.",
        tech: ["Java 17", "OOPs Concepts", "Arrays & Lists", "Trees & Graphs", "Sorting & Searching", "Recursion & Backtracking", "LeetCode Solutions"],
        syllabus: [
            { week: "Week 1-3", title: "Java & Object Oriented Programming", desc: "Java syntax, classes, inheritance, interfaces, polymorphism, abstraction, and memory allocation." },
            { week: "Week 4-7", title: "Linear Data Structures", desc: "Arrays, LinkedLists, Stacks, Queues, hashing techniques, and basic sorting algorithms." },
            { week: "Week 8-11", title: "Advanced Data Structures & DSA", desc: "Binary trees, BSTs, heaps, graph traversals (BFS/DFS), dynamic programming, and greedy algorithms." },
            { week: "Week 12-14", title: "Interview Prep & Coding Sprints", desc: "Solving 150+ standard interview problems on LeetCode/GeeksforGeeks, resume profiling, and mocks." }
        ]
    },
    uiux: {
        title: "UI/UX Design Path",
        desc: "Master the design process from user research to wireframing, high-fidelity UI layout crafting, advanced prototyping in Figma, and usability testing protocols.",
        tech: ["Figma", "User Research", "Wireframing", "UI Design System", "Interactive Prototyping", "Design Patterns", "Usability Testing"],
        syllabus: [
            { week: "Week 1-2", title: "UX Foundations & Research", desc: "User interviews, persona building, empathy mapping, user journeys, and problem statement synthesis." },
            { week: "Week 3-5", title: "Information Architecture & Wireframes", desc: "Creating flowcharts, low-fidelity paper wireframes, and digital grayscale wireframes in Figma." },
            { week: "Week 6-8", title: "Visual Design & UI Kits", desc: "Typography guidelines, grid layouts, color systems, component hierarchies, and interactive design states." },
            { week: "Week 9-10", title: "Prototyping & Usability Testing", desc: "Micro-interactions, smart animate transitions, conducting tests, design handoffs, and portfolios." }
        ]
    },
    backend: {
        title: "Backend Development Path",
        desc: "Learn to build high-performance servers, architectural rest APIs, handle security and user sessions, configure relation and document databases, and optimize performance.",
        tech: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "JSON Web Tokens", "Redis", "Security Best Practices"],
        syllabus: [
            { week: "Week 1-3", title: "Node.js Core & Express Framework", desc: "Event loop, file systems, streams, building HTTP servers, routing, and custom middleware design." },
            { week: "Week 4-7", title: "Databases (SQL vs. NoSQL)", desc: "MongoDB schema design, aggregation pipelines, PostgreSQL relational schemas, indexing, and queries." },
            { week: "Week 8-11", title: "Authentication, Security & APIs", desc: "JWT sessions, bcrypt hashing, API authorization guards, CORS handling, rate limiting, and integrations." },
            { week: "Week 12-14", title: "Caching, Performance & Deployment", desc: "Caching with Redis, unit testing with Jest, load balancing, process management (PM2), and cloud launch." }
        ]
    },
    devops: {
        title: "DevOps & Cloud Path",
        desc: "Master software operations: package applications in Docker, build automated CI/CD pipelines, configure cloud platforms, and orchestrate containerized applications.",
        tech: ["Git & GitLab", "Docker", "Linux Shell", "Nginx", "GitHub Actions", "AWS (EC2/S3)", "Kubernetes", "Prometheus & Grafana"],
        syllabus: [
            { week: "Week 1-3", title: "Linux Systems & Docker Containers", desc: "Linux shell commands, process management, writing Dockerfiles, docker-compose, and volume bindings." },
            { week: "Week 4-6", title: "Continuous Integration & Deployment", desc: "CI/CD philosophies, writing GitHub Actions workflow scripts, linting, automation tests, and webhooks." },
            { week: "Week 7-8", title: "AWS Cloud Operations", desc: "EC2 server provisioning, VPC configuration, IAM security rules, Nginx reverse proxy, and SSL setup." },
            { week: "Week 9-10", title: "Kubernetes & Monitoring", desc: "Pod management, service configurations, cluster architectures, and performance tracking dashboards." }
        ]
    }
};

// Student Projects Data
const projectsData = [
    {
        title: "DevConnect Social",
        category: "webdev",
        desc: "A developer networking app featuring markdown blogs, real-time messaging, and profile integrations.",
        tags: ["React", "CSS Grid", "Node.js", "Socket.io"],
        svg: `<svg viewBox="0 0 100 60" class="proj-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" rx="6" fill="#0c0d22" stroke="rgba(37,99,235,0.15)" stroke-width="1.5"/>
            <circle cx="28" cy="22" r="6" fill="none" stroke="#2563EB" stroke-width="1.5"/>
            <circle cx="72" cy="22" r="6" fill="none" stroke="#06B6D4" stroke-width="1.5"/>
            <path d="M36 22h28" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="2 2"/>
            <circle cx="50" cy="22" r="3" fill="#86EFAC"/>
            <rect x="20" y="38" width="60" height="4" rx="2" fill="#94A3B8" opacity="0.3"/>
            <rect x="30" y="46" width="40" height="4" rx="2" fill="#94A3B8" opacity="0.15"/>
        </svg>`
    },
    {
        title: "Stock AI Predictor",
        category: "ds",
        desc: "A forecasting model utilizing historical equity indexes and neural networks to project price trends.",
        tags: ["Python", "Pandas", "Scikit-Learn", "TensorFlow"],
        svg: `<svg viewBox="0 0 100 60" class="proj-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" rx="6" fill="#0c0d22" stroke="rgba(37,99,235,0.15)" stroke-width="1.5"/>
            <path d="M15 45 L35 30 L55 38 L72 18 L85 24" fill="none" stroke="rgba(37,99,235,0.2)" stroke-width="1.5"/>
            <path d="M15 45 L35 30 L55 38 L72 18 L85 14" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="85" cy="14" r="2.5" fill="#06B6D4"/>
            <line x1="15" y1="48" x2="85" y2="48" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.3"/>
        </svg>`
    },
    {
        title: "Secure Gate API",
        category: "backend",
        desc: "A backend service featuring role-based auth, Redis caching, and rate limiting plugins.",
        tags: ["Express", "Redis", "JWT", "MongoDB"],
        svg: `<svg viewBox="0 0 100 60" class="proj-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" rx="6" fill="#0c0d22" stroke="rgba(52,211,153,0.15)" stroke-width="1.5"/>
            <rect x="36" y="24" width="28" height="20" rx="3" fill="none" stroke="#34D399" stroke-width="2"/>
            <path d="M42 24v-6a8 8 0 0 1 16 0v6" fill="none" stroke="#34D399" stroke-width="1.5"/>
            <circle cx="50" cy="34" r="2.5" fill="#34D399"/>
            <line x1="50" y1="36" x2="50" y2="41" stroke="#34D399" stroke-width="1.5"/>
        </svg>`
    },
    {
        title: "CleanCart Design",
        category: "webdev",
        desc: "A highly interactive, fluid UX layout for e-commerce, showcasing grid alignment and accessibility.",
        tags: ["Figma", "HTML5", "Vanilla CSS", "Flexbox"],
        svg: `<svg viewBox="0 0 100 60" class="proj-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" rx="6" fill="#0c0d22" stroke="rgba(251,191,36,0.15)" stroke-width="1.5"/>
            <rect x="18" y="16" width="18" height="28" rx="2" fill="none" stroke="#FBBF24" stroke-width="1.5"/>
            <rect x="41" y="16" width="18" height="28" rx="2" fill="none" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.3"/>
            <rect x="64" y="16" width="18" height="28" rx="2" fill="none" stroke="#94A3B8" stroke-width="1" stroke-opacity="0.3"/>
            <circle cx="27" cy="36" r="3" fill="#FBBF24"/>
        </svg>`
    },
    {
        title: "Sentiment Engine",
        category: "ds",
        desc: "A natural language utility sorting social feeds into positive/negative scores.",
        tags: ["Python", "NLTK", "Scikit-Learn", "REST API"],
        svg: `<svg viewBox="0 0 100 60" class="proj-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" rx="6" fill="#0c0d22" stroke="rgba(249,115,22,0.15)" stroke-width="1.5"/>
            <circle cx="36" cy="30" r="10" fill="none" stroke="#F97316" stroke-width="1.5"/>
            <circle cx="64" cy="30" r="10" fill="none" stroke="#94A3B8" stroke-width="1.5" stroke-opacity="0.4"/>
            <path d="M32 28a1.5 1.5 0 1 1 3 0M41 28a1.5 1.5 0 1 1 3 0" stroke="#F97316" stroke-width="1" fill="none"/>
            <path d="M31 35q5 4 10 0" stroke="#F97316" stroke-width="1.5" fill="none"/>
            <path d="M60 28a1.5 1.5 0 1 1 3 0M69 28a1.5 1.5 0 1 1 3 0" stroke="#94A3B8" stroke-width="1" fill="none" stroke-opacity="0.4"/>
            <path d="M59 36 q5 4 10 0" stroke="#94A3B8" stroke-dasharray="" stroke-width="1.5" stroke-opacity="0.4" fill="none"/>
        </svg>`
    },
    {
        title: "Kubernetes Cluster Setup",
        category: "backend",
        desc: "Multi-node production cluster configurations with autoscale and Grafana visualization boards.",
        tags: ["Docker", "K8s", "AWS", "Nginx"],
        svg: `<svg viewBox="0 0 100 60" class="proj-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" rx="6" fill="#0c0d22" stroke="rgba(37,99,235,0.15)" stroke-width="1.5"/>
            <polygon points="50,12 80,30 50,48 20,30" fill="none" stroke="#2563EB" stroke-width="1.5"/>
            <polygon points="50,22 68,32 50,42 32,32" fill="none" stroke="#2563EB" stroke-width="1.5" opacity="0.6"/>
            <circle cx="50" cy="30" r="4" fill="#06B6D4"/>
        </svg>`
    }
];

// ════════════════════════════════════════════════
// 2. CORE LAYOUT CONTROLS (SCROLL & NAVIGATION)
// ════════════════════════════════════════════════

const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scroll-progress');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Combined Scroll Listener (Navbar background + Scroll Progress Bar)
window.addEventListener('scroll', () => {
    // 1. Toggle scrolled class
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    
    // 2. Update top progress bar
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercent = (winScroll / height) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolledPercent + '%';
    }
});

// Mobile Hamburger Menu Toggler
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans  = hamburger.querySelectorAll('span');
    const isOpen = mobileMenu.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity   = isOpen ? '0' : '';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

// Close Mobile Drawer
function closeMobile() {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
    });
}

// Scroll Spy: Highlight nav link corresponding to active section
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                link.classList.toggle('active', href === `#${activeId}`);
                if (href === `#${activeId}`) {
                    link.style.color = 'var(--text)';
                } else {
                    link.style.color = '';
                }
            });
        }
    });
}, { threshold: 0.25, rootMargin: "-10% 0px -60% 0px" });

sections.forEach(sec => scrollSpyObserver.observe(sec));

// Smooth Scroll Reveal Observer
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ════════════════════════════════════════════════
// 3. INTERACTIVE CODE PLAYGROUND
// ════════════════════════════════════════════════

function runPlaygroundCode() {
    const editor = document.getElementById('codeEditor');
    const consoleLines = document.getElementById('consoleLines');
    
    // Clear console logs
    consoleLines.innerHTML = '';
    
    // Custom log interceptor
    let logOutput = [];
    const simulatedConsole = {
        log: function(...args) {
            const formatted = args.map(arg => {
                if (Array.isArray(arg)) {
                    return '[' + arg.map(x => typeof x === 'string' ? `"${x}"` : String(x)).join(', ') + ']';
                }
                if (typeof arg === 'object' && arg !== null) {
                    return JSON.stringify(arg);
                }
                return String(arg);
            }).join(' ');
            logOutput.push(formatted);
        }
    };

    // Extract raw text content (stripping custom formatting/HTML injected by wrapper if any)
    const userCode = editor.innerText || editor.textContent;
    
    // Extract actual executable js by stripping line numbers
    // Line numbers look like "1", "2" at starts of lines, so we parse line by line
    const cleanLines = userCode.split('\n').map(line => {
        // Strip line numbers e.g. "1\t// code" or "16console.log"
        return line.replace(/^\s*\d+\s*/, '');
    }).join('\n');

    try {
        // Evaluate user script in enclosed function scope
        const runFn = new Function('console', cleanLines);
        runFn(simulatedConsole);
        
        if (logOutput.length === 0) {
            consoleLines.innerHTML = `<div class="console-line" style="color: var(--text-muted);">// Code executed successfully. (No output printed)</div>`;
        } else {
            logOutput.forEach(line => {
                consoleLines.innerHTML += `<div class="console-line console-success">> ${line}</div>`;
            });
        }
    } catch (error) {
        consoleLines.innerHTML = `<div class="console-line" style="color: #F87171;">> Error: ${error.message}</div>`;
    }

    // Auto-scroll simulated console
    const codeConsole = document.getElementById('codeConsole');
    codeConsole.scrollTop = codeConsole.scrollHeight;
}

// ════════════════════════════════════════════════
// 4. ABOUT INTERACTIVE ROADMAP STEPPER
// ════════════════════════════════════════════════

function switchStep(index) {
    // 1. Toggle step buttons
    const btns = document.querySelectorAll('.roadmap-step-btn');
    btns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });

    // 2. Animate step progress connector line
    const progressBar = document.getElementById('roadmapProgress');
    if (progressBar) {
        progressBar.style.width = (index * 33.33) + '%';
    }

    // 3. Switch details pane
    const panes = document.querySelectorAll('.roadmap-pane');
    panes.forEach((pane, idx) => {
        pane.classList.toggle('active', idx === index);
    });
}

// ════════════════════════════════════════════════
// 5. STUDENT PORTFOLIO SHOWROOM
// ════════════════════════════════════════════════

function filterProjects(category) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        const onclickAttr = tab.getAttribute('onclick');
        tab.classList.toggle('active', onclickAttr.includes(`'${category}'`));
    });

    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    // Clear and re-render filtered set
    grid.innerHTML = '';
    
    const filtered = projectsData.filter(proj => category === 'all' || proj.category === category);
    
    filtered.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card reveal visible';
        
        const badgeText = proj.category === 'webdev' ? 'Web Dev' : 
                          proj.category === 'ds' ? 'Data Science' : 'Backend & Ops';
                          
        const tagsHTML = proj.tags.map(t => `<span class="p-tag">${t}</span>`).join('');
        
        card.innerHTML = `
            <div class="project-preview">
                <span class="project-badge">${badgeText}</span>
                ${proj.svg}
            </div>
            <div class="project-info">
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-desc">${proj.desc}</p>
                <div class="project-tags">${tagsHTML}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initial Project Load
filterProjects('all');

// ════════════════════════════════════════════════
// 6. TESTIMONIAL SLIDER CAROUSEL
// ════════════════════════════════════════════════

let testiIndex = 0;
let testimonialTimer;

function showTestiSlide(index) {
    const slider = document.getElementById('testimonialSlider');
    const dots = document.querySelectorAll('.testi-dot');
    const totalSlides = dots.length;
    
    if (!slider) return;

    // Boundary loop guards
    if (index >= totalSlides) testiIndex = 0;
    else if (index < 0) testiIndex = totalSlides - 1;
    else testiIndex = index;

    // Shift slider track
    slider.style.transform = `translateX(-${testiIndex * 100}%)`;

    // Manage dots active states
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === testiIndex);
    });
}

function currentTestiSlide(index) {
    showTestiSlide(index);
    resetTestiTimer();
}

function startTestiTimer() {
    testimonialTimer = setInterval(() => {
        showTestiSlide(testiIndex + 1);
    }, 6000);
}

function resetTestiTimer() {
    clearInterval(testimonialTimer);
    startTestiTimer();
}

// Initialize Slider and Auto-slide
startTestiTimer();

// ════════════════════════════════════════════════
// 7. FAQ ACCORDION COLLAPSE SYSTEM
// ════════════════════════════════════════════════

function toggleFaq(button) {
    const item = button.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isActive = item.classList.contains('active');

    // Close other open accordions
    document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item && other.classList.contains('active')) {
            other.classList.remove('active');
            other.querySelector('.faq-answer').style.maxHeight = null;
        }
    });

    item.classList.toggle('active');
    
    if (!isActive) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
        answer.style.maxHeight = null;
    }
}

// ════════════════════════════════════════════════
// 8. COURSE DETAILS MODAL ENGINE
// ════════════════════════════════════════════════

let activeModalCourse = '';

function openSyllabus(courseId) {
    const modal = document.getElementById('courseModal');
    const course = coursesData[courseId];
    
    if (!modal || !course) return;

    activeModalCourse = courseId;

    // Fill Title and Description
    document.getElementById('modalTitle').innerText = course.title;
    document.getElementById('modalDesc').innerText = course.desc;

    // Fill Tech Stack pills
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = course.tech.map(t => `<span class="modal-tech-pill">${t}</span>`).join('');

    // Fill Syllabus curriculum timeline
    const syllabusContainer = document.getElementById('modalSyllabus');
    syllabusContainer.innerHTML = course.syllabus.map(step => `
        <div class="syllabus-item">
            <span class="syllabus-week">${step.week}</span>
            <div class="syllabus-details">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
            </div>
        </div>
    `).join('');

    // Lock background scroll and open modal
    document.body.style.overflow = 'hidden';
    modal.classList.add('open');
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    if (!modal) return;

    // Unlock background scroll and close modal
    document.body.style.overflow = '';
    modal.classList.remove('open');
    activeModalCourse = '';
}

// Autofill dropdown from syllabus enroll trigger
function enrollFromModal() {
    if (!activeModalCourse) return;

    const courseSelect = document.getElementById('course');
    if (courseSelect) {
        courseSelect.value = activeModalCourse;
    }

    closeModal();

    // Smooth-scroll to contact
    const contactSec = document.getElementById('contact');
    if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close modal if user clicks outside container background
window.addEventListener('click', (e) => {
    const modal = document.getElementById('courseModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape keypress
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ════════════════════════════════════════════════
// 9. FORM VALIDATION & TOAST ALERT SYSTEM
// ════════════════════════════════════════════════

function showToast(title, desc, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    // Create Toast Box element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Choose emoji icon based on severity type
    const emoji = type === 'success' ? '🚀' : type === 'warning' ? '⚠️' : '❌';

    toast.innerHTML = `
        <div class="toast-icon">${emoji}</div>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            <div class="toast-desc">${desc}</div>
        </div>
        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);

    // Dynamic Entrance Animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    // Animate the progress bar timer shrinking
    const progress = toast.querySelector('.toast-progress');
    progress.style.transition = 'width 4s linear';
    setTimeout(() => {
        progress.style.width = '0%';
    }, 100);

    // Auto-remove toast container
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 350);
    }, 4000);
}

// Contact Form Submit validation interceptor
function handleContactForm(event) {
    if (event) event.preventDefault();

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;

    // Validation check
    if (!fname || !email || !course) {
        showToast(
            "Incomplete Form", 
            "Please provide your name, email, and select a learning path.", 
            "warning"
        );
        return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast(
            "Invalid Email", 
            "Please enter a valid email address.", 
            "error"
        );
        return;
    }

    // Success response
    const selectedCourseText = document.getElementById('course').options[document.getElementById('course').selectedIndex].text;
    showToast(
        "Enquiry Received!", 
        `Thanks ${fname}! We've registered your interest in the ${selectedCourseText}. We'll email you within 24 hours.`, 
        "success"
    );

    // Reset Form Fields
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('course').value = '';
    document.getElementById('msg').value = '';
}
