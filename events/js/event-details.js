document.addEventListener('DOMContentLoaded', () => {
    const eventDetailImage = document.getElementById('eventDetailImage');
    const eventDetailName = document.getElementById('eventDetailName');
    const eventDetailDate = document.getElementById('eventDetailDate');
    const eventDetailLocation = document.getElementById('eventDetailLocation');
    const eventDetailCategory = document.getElementById('eventDetailCategory');
    const eventDetailDescription = document.getElementById('eventDetailDescription');
    const eventNameBreadcrumb = document.getElementById('eventNameBreadcrumb');
    const eventDetailsContainer = document.getElementById('eventDetailsContainer');

    const eventsData = [
        {
            id: 1,
            name: "Harare Summer Music Festival",
            date: "2025-08-15",
            location: "Harare Gardens, Harare",
            category: "Music",
            description: "An annual music festival featuring local and international artists. Enjoy live bands, food stalls, and a vibrant atmosphere. Expect a mix of genres from Afrobeats to ZimDancehall, ensuring there's something for everyone. Family-friendly event. Multiple stages, VIP areas, and a dedicated kids zone will be available. Don't miss out on the biggest summer event!",
            image: "images/summers.jpeg"
        },
        {
            id: 2,
            name: "Zimbabwe Tech Innovators Summit",
            date: "2025-09-01",
            location: "Rainbow Towers, Harare",
            category: "Tech",
            description: "A summit bringing together tech leaders, entrepreneurs, and developers to discuss the future of technology in Zimbabwe and Africa. Featuring keynote speeches from leading innovators, interactive panel discussions on AI, blockchain, and fintech, and a startup pitch competition with investment opportunities. Network with industry experts and discover the next big thing.",
            image: "images/tech.jpeg"
        },
        {
            id: 3,
            name: "Harare Annual Marathon",
            date: "2025-08-15",
            location: "National Sports Stadium, Harare",
            category: "Sports",
            description: "Join thousands of runners in the city's biggest annual marathon. Various distances available including 5k, 10k, and full marathon. Support local charities and push your limits. Medals for all finishers! Hydration stations and medical support will be provided along the route. Register early to secure your spot.",
            image: "images/marathon.jpeg"
        },
        {
            id: 4,
            name: "Borrowdale Food Fair & Craft Market",
            date: "2025-10-05",
            location: "Borrowdale Race Course, Harare",
            category: "Food",
            description: "Taste the best local and international cuisine. Food stalls, cooking demonstrations by renowned chefs, and live entertainment for the whole family. Discover unique crafts from local artisans, from handmade jewelry to custom artworks. A perfect day out for foodies and shoppers!",
            image: "images/food.jpeg"
        },
        {
            id: 5,
            name: "Art Exhibition: Modern Visions of Zimbabwe",
            date: "2025-09-20",
            location: "National Gallery of Zimbabwe, Harare",
            category: "Arts",
            description: "Explore contemporary art from emerging and established Zimbabwean artists. This exhibition showcases diverse perspectives and innovative techniques across various mediums, including painting, sculpture, and mixed media. Guided tours available daily. A must-see for art enthusiasts.",
            image: "images/art.jpeg"
        },
        {
            id: 6,
            name: "Digital Marketing Workshop",
            date: "2025-11-10",
            location: "Newlands, Harare",
            category: "Workshop",
            description: "A hands-on workshop designed to equip small business owners and marketers with essential digital marketing skills. Learn about SEO strategies, social media marketing, email campaign management, and content creation best practices. Limited seats available, register now!",
            image: "images/market.jpeg"
        },
        {
            id: 7,
            name: "Children's Book Reading & Puppet Show",
            date: "2025-07-20",
            location: "National Library, Harare",
            category: "Family",
            description: "Bring your little ones for an enchanting afternoon of storytelling and a delightful puppet show. Featuring popular children's authors and interactive sessions. Perfect for families with young children looking for engaging and educational activities.",
            image: "images/read.jpeg"
        }
    ];

    // Get event ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));

    if (isNaN(eventId)) {
        eventDetailsContainer.innerHTML = `
            <div class="alert alert-danger text-center" role="alert">
                <h4 class="alert-heading">Error!</h4>
                <p>No event ID provided or invalid ID.</p>
                <hr>
                <a href="events.html" class="btn btn-danger">Back to Events</a>
            </div>
        `;
        return;
    }

    const event = eventsData.find(e => e.id === eventId);

    if (event) {
        eventDetailImage.src = event.image;
        eventDetailImage.alt = `Image for ${event.name}`;
        eventDetailName.textContent = event.name;
        eventDetailDate.textContent = event.date;
        eventDetailLocation.textContent = event.location;
        eventDetailCategory.textContent = event.category;
        eventDetailDescription.textContent = event.description;
        eventNameBreadcrumb.textContent = event.name; // Update breadcrumb
        document.title = `Event Locator - ${event.name}`; // Update page title
    } else {
        eventDetailsContainer.innerHTML = `
            <div class="alert alert-warning text-center" role="alert">
                <h4 class="alert-heading">Event Not Found!</h4>
                <p>The event you are looking for could not be found.</p>
                <hr>
                <a href="events.html" class="btn btn-warning">Back to Events</a>
            </div>
        `;
    }
});