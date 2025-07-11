document.addEventListener('DOMContentLoaded', () => {
    const eventListContainer = document.getElementById('eventListContainer');
    const searchSummary = document.getElementById('searchSummary');

    const eventsData = [
        {
            id: 1,
            name: "Harare Summer Music Festival",
            date: "2025-08-15",
            location: "Harare Gardens, Harare",
            category: "Music",
            description: "An annual music festival featuring local and international artists. Enjoy live bands, food stalls, and a vibrant atmosphere. Expect a mix of genres from Afrobeats to ZimDancehall, ensuring there's something for everyone. Family-friendly event.",
            image: "images/summers.jpeg"
        },
        {
            id: 2,
            name: "Zimbabwe Tech Innovators Summit",
            date: "2025-09-01",
            location: "Rainbow Towers, Harare",
            category: "Tech",
            description: "A summit bringing together tech leaders, entrepreneurs, and developers to discuss the future of technology in Zimbabwe and Africa. Featuring keynote speeches, panel discussions, and a startup pitch competition. Network with industry experts.",
            image: "images/tech.jpeg"
        },
        {
            id: 3,
            name: "Harare Annual Marathon",
            date: "2025-08-15",
            location: "National Sports Stadium, Harare",
            category: "Sports",
            description: "Join thousands of runners in the city's biggest annual marathon. Various distances available including 5k, 10k, and full marathon. Support local charities and push your limits. Medals for all finishers!",
            image: "images/marathon.jpeg"
        },
        {
            id: 4,
            name: "Borrowdale Food Fair & Craft Market",
            date: "2025-10-05",
            location: "Borrowdale Race Course, Harare",
            category: "Food",
            description: "Taste the best local and international cuisine. Food stalls, cooking demonstrations, and live entertainment for the whole family. Discover unique crafts from local artisans. A perfect day out!",
            image: "images/food.jpeg"
        },
        {
            id: 5,
            name: "Art Exhibition: Modern Visions of Zimbabwe",
            date: "2025-09-20",
            location: "National Gallery of Zimbabwe, Harare",
            category: "Arts",
            description: "Explore contemporary art from emerging and established Zimbabwean artists. This exhibition showcases diverse perspectives and innovative techniques across various mediums, including painting, sculpture, and mixed media.",
            image: "images/art.jpeg"
        },
        {
            id: 6,
            name: "Digital Marketing Workshop",
            date: "2025-11-10",
            location: "Newlands, Harare",
            category: "Workshop",
            description: "A hands-on workshop designed to equip small business owners and marketers with essential digital marketing skills. Learn about SEO, social media strategy, and content creation.",
            image: "images/market.jpeg"
        },
        {
            id: 7,
            name: "Children's Book Reading & Puppet Show",
            date: "2025-07-20",
            location: "National Library, Harare",
            category: "Family",
            description: "Bring your little ones for an enchanting afternoon of storytelling and a delightful puppet show. Perfect for families with young children looking for engaging activities.",
            image: "images/read.jpeg"
        }
    ];

    // Get search criteria from localStorage
    const searchCity = localStorage.getItem('searchCity') || '';
    const eventDate = localStorage.getItem('eventDate') || '';
    const eventCategory = localStorage.getItem('eventCategory') || '';

    // Display search summary
    let summaryText = "Showing events";
    const filtersApplied = [];
    if (searchCity) filtersApplied.push(`in/around "${searchCity}"`);
    if (eventDate) filtersApplied.push(`on ${eventDate}`);
    if (eventCategory) filtersApplied.push(`for category "${eventCategory}"`);

    if (filtersApplied.length > 0) {
        summaryText += " " + filtersApplied.join(" and ");
    } else {
        summaryText += " (All Events)";
    }
    searchSummary.textContent = summaryText;

    function filterEvents(events, city, date, category) {
        return events.filter(event => {
            const matchesCity = city ?
                (event.location.toLowerCase().includes(city.toLowerCase()) ||
                 event.name.toLowerCase().includes(city.toLowerCase()) ||
                 event.description.toLowerCase().includes(city.toLowerCase()))
                : true;
            const matchesDate = date ? event.date === date : true;
            const matchesCategory = category ? event.category.toLowerCase() === category.toLowerCase() : true;
            return matchesCity && matchesDate && matchesCategory;
        });
    }

    function displayEvents(events) {
        eventListContainer.innerHTML = ''; // Clear previous events
        if (events.length === 0) {
            eventListContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="lead text-muted">No events found matching your criteria.</p>
                    <a href="index.html" class="btn btn-primary mt-3">Try a New Search</a>
                </div>
            `;
            return;
        }

        events.forEach(event => {
            const eventCardCol = document.createElement('div');
            // Adding mb-4 for more vertical space between cards.
            // The g-4 on the parent (eventListContainer) handles horizontal space.
            eventCardCol.className = 'col mb-4';

            const eventCard = document.createElement('div');
            eventCard.className = 'card h-100 shadow-sm';

            const eventImage = document.createElement('img');
            eventImage.className = 'card-img-top';
            eventImage.src = event.image;
            eventImage.alt = `Image for ${event.name}`;
            eventImage.loading = 'lazy'; // Improve performance
            // --- CORRECTION FOR IMAGE SPACE ---
            eventImage.style.height = '180px'; // Set a fixed height for consistency
            eventImage.style.objectFit = 'cover'; // Crop image to cover the area without distortion

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body d-flex flex-column';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = event.name;
            // --- CORRECTION FOR TEXT COLOR (Black) ---
            cardTitle.style.color = 'black';

            const cardSubtitle = document.createElement('h6');
            cardSubtitle.className = 'card-subtitle mb-2 text-muted'; // Keeping text-muted for a slightly lighter look
            cardSubtitle.textContent = `${event.date} | ${event.location}`;
            // If you want cardSubtitle to be black too, uncomment the line below:
            // cardSubtitle.style.color = 'black';

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            // Truncate description for card view
            cardText.textContent = event.description.length > 120 ?
                                       event.description.substring(0, 117) + '...' :
                                       event.description;
            // --- CORRECTION FOR TEXT COLOR (Black) ---
            cardText.style.color = 'black';


            const viewDetailsBtn = document.createElement('a');
            // --- CORRECTION FOR BUTTON STYLING (Baby Pink with Black Text) ---
            viewDetailsBtn.className = 'btn mt-auto'; // Removed 'btn-primary'
            viewDetailsBtn.href = `event-details.html?id=${event.id}`;
            viewDetailsBtn.textContent = 'View Details';
            viewDetailsBtn.style.backgroundColor = '#FFC0CB'; // Baby Pink
            viewDetailsBtn.style.color = 'black'; // Black text
            viewDetailsBtn.style.borderColor = '#FFC0CB'; // Border color matching background

            // Optional: Add hover effect for the button
            viewDetailsBtn.onmouseover = function() {
                this.style.backgroundColor = '#EEA9B8'; // Slightly darker pink for hover
                this.style.borderColor = '#EEA9B8';
            };
            viewDetailsBtn.onmouseout = function() {
                this.style.backgroundColor = '#FFC0CB';
                this.style.borderColor = '#FFC0CB';
            };

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(viewDetailsBtn);

            eventCard.appendChild(eventImage);
            eventCard.appendChild(cardBody);
            eventCardCol.appendChild(eventCard);
            eventListContainer.appendChild(eventCardCol);
        });
    }

    const filteredEvents = filterEvents(eventsData, searchCity, eventDate, eventCategory);
    displayEvents(filteredEvents);
});