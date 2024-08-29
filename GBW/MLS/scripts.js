// Initialize Google Map
function initMap() {
    var center = { lat: 34.061570, lng: -118.376563 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [{ "color": "#ebe3cd" }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#523735" }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#f5f1e6" }]
            }
        ]
    });

    var locations = [
        { lat: 34.090009, lng: -118.406698, price: '$87M' },
        { lat: 34.091556, lng: -118.420775, price: '$85M' },
        { lat: 34.089576, lng: -118.424501, price: '$75M' },
        { lat: 34.082839, lng: -118.412244, price: '$68M' }
    ];

    locations.forEach(location => {
        var marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            label: {
                text: location.price,
                color: "white",
                fontWeight: "bold",
                fontSize: "14px"
            },
            icon: {
                url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
                labelOrigin: new google.maps.Point(15, 10)
            }
        });
    });
}

// Call the initMap function when the page loads
window.onload = initMap;

// Listings Data
const listings = [
    { price: '$1,200,000', beds: '5bd', baths: '4ba', size: '4,500 sqft', address: '1234 Main St, Salt Lake City, UT 84101', mls: 'MLS#: 123456' },
    { price: '$950,000', beds: '4bd', baths: '3.5ba', size: '3,800 sqft', address: '567 Oak St, Park City, UT 84060', mls: 'MLS#: 654321' },
    { price: '$1,500,000', beds: '6bd', baths: '5ba', size: '5,000 sqft', address: '789 Pine Ave, Provo, UT 84604', mls: 'MLS#: 789123' },
    { price: '$1,300,000', beds: '5bd', baths: '4.5ba', size: '4,200 sqft', address: '456 Birch Dr, Ogden, UT 84401', mls: 'MLS#: 321654' },
    { price: '$2,100,000', beds: '7bd', baths: '6ba', size: '7,000 sqft', address: '101 Maple Ln, St. George, UT 84770', mls: 'MLS#: 987456' },
    { price: '$850,000', beds: '4bd', baths: '3ba', size: '3,200 sqft', address: '202 Cedar Ct, Layton, UT 84041', mls: 'MLS#: 654789' },
    { price: '$1,800,000', beds: '6bd', baths: '5.5ba', size: '6,500 sqft', address: '303 Aspen Cir, Draper, UT 84020', mls: 'MLS#: 321789' },
    { price: '$2,300,000', beds: '8bd', baths: '7ba', size: '8,200 sqft', address: '404 Elm Rd, Bountiful, UT 84010', mls: 'MLS#: 456987' },
    { price: '$1,900,000', beds: '7bd', baths: '6ba', size: '7,200 sqft', address: '505 Fir St, Logan, UT 84321', mls: 'MLS#: 987321' },
    { price: '$2,500,000', beds: '9bd', baths: '8ba', size: '9,000 sqft', address: '606 Redwood Dr, Heber City, UT 84032', mls: 'MLS#: 123987' }
];

let currentPage = 1;
const listingsPerPage = 4;

function displayListings(page) {
    const listingsContainer = document.getElementById('listingsContainer');
    listingsContainer.innerHTML = '';

    const startIndex = (page - 1) * listingsPerPage;
    const endIndex = page * listingsPerPage;

    const paginatedListings = listings.slice(startIndex, endIndex);

    paginatedListings.forEach(listing => {
        const listingCard = `
            <div class="listing-card">
                <img src="https://via.placeholder.com/400x200" alt="Property Image">
                <div class="listing-info">
                    <h2>${listing.price}</h2>
                    <p>${listing.beds} • ${listing.baths} • ${listing.size} • Active</p>
                    <p>${listing.address}</p>
                    <p>${listing.mls}</p>
                </div>
            </div>
        `;
        listingsContainer.innerHTML += listingCard;
    });
}

function setupPagination() {
    const nextPage = document.getElementById('nextPage');
    const prevPage = document.getElementById('prevPage');

    nextPage.addEventListener('click', () => {
        if (currentPage * listingsPerPage < listings.length) {
            currentPage++;
            displayListings(currentPage);
        }
    });

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayListings(currentPage);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayListings(currentPage);
    setupPagination();
});

