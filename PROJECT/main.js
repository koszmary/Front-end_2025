// stolen FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      // Toggle visibility of body
      groupBody.classList.toggle('open');
  
      // Close other open FAQ bodies
      const otherGroups = faqContainer.querySelectorAll('.faq-group');
  
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');
  
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });
  
  // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });

  document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country');
    const hotelSelect = document.getElementById('hotel');
    const contactForm = document.getElementById('contactForm');

    // Dane hoteli dla każdego kraju
    const hotels = {
        norway: [
            { name: 'Hotel Oslo Central', value: 'oslo-central' },
            { name: 'Fjord View Hotel', value: 'fjord-view' },
            { name: 'Royal Oslo Hotel', value: 'royal-oslo' }
        ],
        sweden: [
            { name: 'Stockholm Grand Hotel', value: 'stockholm-grand' },
            { name: 'Gothenburg Harbor Hotel', value: 'gothenburg-harbor' },
            { name: 'Malmö City Hotel', value: 'malmo-city' }
        ],
        finland: [
            { name: 'Helsinki Central Hotel', value: 'helsinki-central' },
            { name: 'Rovaniemi Arctic Hotel', value: 'rovaniemi-arctic' },
            { name: 'Turku Riverside Hotel', value: 'turku-riverside' }
        ]
    };

    // Wypełnij listę hoteli na podstawie wybranego kraju
    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;
        hotelSelect.innerHTML = '<option value="">Select a hotel</option>';

        if (selectedCountry && hotels[selectedCountry]) {
            hotels[selectedCountry].forEach(hotel => {
                const option = document.createElement('option');
                option.value = hotel.value;
                option.textContent = hotel.name;
                hotelSelect.appendChild(option);
            });
        }
    });

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

        // Wyświetl potwierdzenie (bez wysyłania na serwer)
        alert(`Message sent!\nCountry: ${country}\nHotel: ${hotel}\nMessage: ${message}`);
        contactForm.reset(); // Resetuje formularz
    });
});