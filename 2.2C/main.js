const app = Vue.createApp({
    data() {
        return {
            products: [
                {id: 1, name: 'Earring 1', description: 'Elegant diamond earring', image: 'earring1.jpg'},
                {id: 2, name: 'Earring 2', description: 'Stylish diamond earring', image: 'earring2.jpg'}
            ]
        };
    },
    methods: {
        addToCart(product) {
            console.log(`Adding ${product.name} to cart.`);
        }
    }
});

app.mount('#app');
