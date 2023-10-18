// Initialize the map
const map = L.map('map').setView([0, -60], 3);

// Add a tile layer to the map (you can replace this with your preferred map provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define an array of rainforest locations with their coordinates
const rainforests = [
    { name: 'Amazon Rainforest', lat: -3.4653, lon: -62.2159 },
    { name: 'Darien Gap', lat: 7.7990, lon: -77.2966 },
    { name: 'Yasuni National Park', lat: -0.6481, lon: -76.4186 },
    { name: 'Tambopata National Reserve', lat: -12.8261, lon: -69.3580 },
    { name: 'Manu National Park', lat: -11.9916, lon: -71.2692 },
    { name: 'Madidi National Park', lat: -11.2641, lon: -67.9773 },
    { name: 'Pacaya-Samiria National Reserve', lat: -4.4478, lon: -74.0010 },
    { name: 'Cocobolo Nature Reserve', lat: 8.1317, lon: -81.4073 },
    { name: 'Monteverde Cloud Forest Reserve', lat: 10.3157, lon: -84.8236 },
    { name: 'Osa Peninsula', lat: 8.5144, lon: -83.5280 },
    { name: 'Cordillera Azul National Park', lat: -6.4719, lon: -76.1733 },
    { name: 'Cockscomb Basin Wildlife Sanctuary', lat: 16.8328, lon: -88.3917 },
    { name: 'Tambopata National Reserve', lat: -12.8135, lon: -69.8269 },
    { name: 'Chocó-Darién Moist Forests', lat: 5.6122, lon: -77.2041 },
    { name: 'Iwokrama Forest', lat: 4.4191, lon: -58.8156 },
    { name: 'Peruvian Amazon', lat: -3.4653, lon: -70.0486 },
    { name: 'Cordillera de Kutukú', lat: -15.6094, lon: -70.4705 },
    { name: 'Los Amigos Conservation Concession', lat: -12.8782, lon: -70.8533 },
    { name: 'Selva Lacandona', lat: 16.8476, lon: -91.9084 },
    { name: 'Sierra del Divisor', lat: -5.8625, lon: -72.4480 },
    { name: 'Darien National Park', lat: 7.7822, lon: -77.2339 },
    { name: 'Pantanal Matogrossense', lat: -17.9394, lon: -56.7823 },
    { name: 'Teatro Amazonas', lat: -3.1307, lon: -60.0236 },
    { name: 'Atlantic Forest South-East Reserves', lat: -23.5236, lon: -48.7273 },
    { name: 'Yacuma River', lat: -13.0823, lon: -66.8835 },
    { name: 'Cerrado Protected Areas', lat: -12.3303, lon: -51.1772 },
    { name: 'Apaporis River', lat: 0.8407, lon: -70.2412 },
    { name: 'Serra do Mar Coastal Forests', lat: -24.8128, lon: -48.8447 },
]


// Add markers for each rainforest location
rainforests.forEach(forest => {
    L.marker([forest.lat, forest.lon]).addTo(map)
        .bindPopup(`<b>${forest.name}</b>`)
        .openPopup();
});
