const About = {
    template: `
    <article id="about">
        <h2>{{ name }}</h2>
        <p>{{ biography }}</p>
    </article>
    `,
    data() {
        return {
            name: "",
            biography: ""
        };
    },
    mounted() {
        fetch('/aboutme.json')
            .then(response => response.json())
            .then(data => {
                this.name = data.name;
                this.biography = data.biography;
            });
    }
};


const Projects = {
    template: `
    <section id="projects">
        <h2>Projects</h2>
        <div v-for="project in projects">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </div>
    </section>
    `,
    data() {
        return {
            projects: []
        };
    },
    mounted() {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
                this.projects = data;
            });
    }
};


const Contact = {
    template: `
        <div>
           
    <h2>Contact</h2>
    <form id="contactForm" action="#" method="POST">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required placeholder="Your message"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
</section>

        </div>
    `
};

const Register = {
    template: `
    <section id="admin-register">
        <h2>Admin Registration</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Register</button>
        </form>
    </section>
    `,
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        register() {
            localStorage.setItem('adminUsername', this.username);
            localStorage.setItem('adminPassword', btoa(this.password)); // Storing in base64 format for simplicity
            alert("Registration successful!");
            this.$router.push('/admin/login');
        }
    }
};

const Login = {
    template: `
    <section id="admin-login">
        <h2>Admin Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </section>
    `,
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            const storedUsername = localStorage.getItem('adminUsername');
            const storedPassword = localStorage.getItem('adminPassword');

            if (storedUsername && storedPassword && this.username === storedUsername && btoa(this.password) === storedPassword) {
                alert("Login successful!");
            } else {
                alert("Invalid credentials!");
            }
        }
    }
};
const Resume = {
    template: `
        <section id="resume">
            <div class="resume-header">
                
                <h1>John Doe</h1>
                <p>Web Developer</p>
            </div>
            <div class="resume-content">
                <div class="resume-left">
                    <h2>Contact</h2>
                    <p><strong>Address:</strong> 123 ABC Street, City, Country</p>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    <p><strong>Phone:</strong> +1234567890</p>
                    
                    <h2>Education</h2>
                    <h3>University XYZ</h3>
                    <p>BSc in Computer Science, 2019 - 2022</p>
                    
                    <h2>Skills</h2>
                    <ul>
                        <li>Web Development</li>
                        <li>JavaScript</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div class="resume-right">
                    <h2>Experience</h2>
                    <h3>Web Developer at ABC Company</h3>
                    <p>2022 - Present</p>
                    <p>Developed and maintained company website, improved user experience and added new features.</p>
                    
                    <h3>Intern at DEF Startup</h3>
                    <p>2021 - 2022</p>
                    <p>Assisted senior developers, worked on frontend tasks, and contributed to open-source projects.</p>
                    
                    <h2>Projects</h2>
                    <h3>Personal Portfolio</h3>
                    <p>Developed a personal portfolio website showcasing my projects, skills, and experiences.</p>
                    
                    <h3>E-commerce Website</h3>
                    <p>Developed a full-fledged e-commerce website with features like cart, checkout, and user authentication.</p>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            // If you want to make the resume dynamic, add data properties here
            // e.g. name: 'John Doe', skills: ['Web Development', 'JavaScript'], etc.
        };
    },
    methods: {
        // If you want to add functionality, like fetching data from an API or manipulating data, add methods here
    }
};



const routes = [
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/resume', component: Resume }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
