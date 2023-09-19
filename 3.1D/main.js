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
function addChat() {
    const chatOutput = document.getElementById("chatOutput");
    const chatInput = document.getElementById("chatInput");
    chatOutput.innerHTML += `<div class="user-message">${chatInput.value}</div>`;
    // Simulate bot response for demo purposes
    setTimeout(() => {
        chatOutput.innerHTML += '<div class="bot-message">Thanks for reaching out! How can I assist you today?</div>';
    }, 1000);
    chatInput.value = '';
}
let data = [
    { month: 'January', sales: 130 },
    { month: 'February', sales: 150 },
    { month: 'March', sales: 170 }
    // ... add other months
];

let svg = d3.select("#chart")
    .append("svg")
    .attr("width", 500)
    .attr("height", 300);

let x = d3.scaleBand()
    .domain(data.map(d => d.month))
    .range([0, 500])
    .padding(0.2);

let y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.sales)])
    .range([300, 0]);

let bars = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.month))
    .attr("y", d => y(d.sales))
    .attr("width", x.bandwidth())
    .attr("height", d => 300 - y(d.sales))
    .attr("fill", "steelblue");

function updateData() {
    // Fetch new data from an API or just modify the current data
    data[0].sales += 10;  // Just an example modification

    // Update y domain
    y.domain([0, d3.max(data, d => d.sales)]);

    // Update bars
    bars.data(data)
        .attr("y", d => y(d.sales))
        .attr("height", d => 300 - y(d.sales));
}

app.mount('#app');
