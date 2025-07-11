document.addEventListener('DOMContentLoaded', () => {
    const searchEventsBtn = document.getElementById('searchEventsBtn');

    if (searchEventsBtn) {
        searchEventsBtn.addEventListener('click', () => {
            const searchCity = document.getElementById('searchCity').value.trim();
            const eventDate = document.getElementById('eventDate').value;
            const eventCategory = document.getElementById('eventCategory').value;

            localStorage.setItem('searchCity', searchCity);
            localStorage.setItem('eventDate', eventDate);
            localStorage.setItem('eventCategory', eventCategory);

            window.location.href = 'events.html';
        });
    }

    const storedCity = localStorage.getItem('searchCity');
    const storedDate = localStorage.getItem('eventDate');
    const storedCategory = localStorage.getItem('eventCategory');

    if (storedCity) {
        document.getElementById('searchCity').value = storedCity;
    }
    if (storedDate) {
        document.getElementById('eventDate').value = storedDate;
    }
    if (storedCategory) {
        document.getElementById('eventCategory').value = storedCategory;
    }
});