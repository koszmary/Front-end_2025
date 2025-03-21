
    // Obsługa wysłania formularza
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const country = countrySelect.value;
        const hotel = hotelSelect.value;
        const message = document.getElementById('message').value;

        if (!country || !hotel || !message) {
            alert('Please fill out all fields.');
            return;
        }
        alert(`Message sent!\nCountry: ${country}\nHotel: ${hotel}\nMessage: ${message}`);
        contactForm.reset(); // Resetuje formularz
    });
});