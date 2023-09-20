const app = Vue.createApp({
    data() {
        return {
            skills: [
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 80 },
                { name: 'Vue 3', level: 70 }
            ],
            projects: [
                { name: 'Project 1' },
                { name: 'Project 2' },
                { name: 'Project 3' }
            ],
            form: {
                name: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            alert(`Thank you, ${this.form.name}. Your message has been received!`);
            this.form.name = '';
            this.form.message = '';
        }
    }
});

app.mount('#app');
