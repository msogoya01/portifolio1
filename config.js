// Portfolio Configuration File
// Update this file to customize your portfolio content

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Full Stack Developer & Creative Problem Solver",
        description: "I create innovative digital solutions that make a difference. Passionate about clean code, user experience, and cutting-edge technology.",
        about: {
            paragraph1: "I'm a passionate developer with a love for creating meaningful digital experiences. With expertise in modern web technologies, I specialize in building responsive, scalable applications that solve real-world problems.",
            paragraph2: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
        },
        stats: {
            experience: "3+",
            projects: "20+",
            clients: "15+"
        }
    },

    // Contact Information
    contact: {
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        location: "Your City, Country",
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#",
            instagram: "#"
        }
    },

    // Skills Configuration
    skills: {
        frontend: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "React", icon: "fab fa-react" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Python", icon: "fab fa-python" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "Express.js", icon: "fas fa-server" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Cloud", icon: "fas fa-cloud" }
        ]
    },

    // Projects Configuration
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "fas fa-laptop-code",
            github: "#",
            live: "#"
        },
        {
            title: "Task Management App",
            description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
            technologies: ["Vue.js", "Firebase", "CSS3"],
            image: "fas fa-mobile-alt",
            github: "#",
            live: "#"
        },
        {
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for visualizing complex data with charts, filters, and real-time updates.",
            technologies: ["Python", "Django", "Chart.js"],
            image: "fas fa-chart-line",
            github: "#",
            live: "#"
        }
    ],

    // Theme Configuration
    theme: {
        primaryGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        primaryColor: "#667eea",
        secondaryColor: "#764ba2",
        textDark: "#2d3748",
        textSecondary: "#666",
        backgroundColor: "#f8fafc"
    },

    // Animation Configuration
    animations: {
        typingSpeed: 50,
        fadeInDelay: 500,
        parallaxIntensity: 0.5
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} 