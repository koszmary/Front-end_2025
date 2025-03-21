// Obsługa wysłania formularza
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Zapobiega wysłaniu formularza

    const country = countrySelect.value;
    const hotel = hotelSelect.value;
    const message = document.getElementById('message').value;

    if (!country || !hotel || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Resetowanie formularza
    contactForm.reset();

    // Wyświetl potwierdzenie (bez wysyłania na serwer)
    alert(`Message sent!\nCountry: ${country}\nHotel: ${hotel}\nMessage: ${message}`);
});