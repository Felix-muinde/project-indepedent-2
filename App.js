const apiUrl = 'http://localhost:3000/cars';

// Fetch and display car list from the public API
async function displayCarList() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const carListContainer = document.getElementById('carList');
    carListContainer.innerHTML = '';
    data.forEach(car => {
      const carCard = document.createElement('div');
      carCard.classList.add('car-card');
      carCard.innerHTML = `
        <h3>${car.name}</h3>
        <p>Model: ${car.model}</p>
        <p>Price: ${car.price}</p>
      `;
      carListContainer.appendChild(carCard);
    });
  } catch (error) {
    console.error('Error fetching car list:', error);
  }
}

// Book a car
document.getElementById('bookingForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const pickupDate = document.getElementById('pickupDate').value;

  // Add code to handle the booking process, e.g., send data to the API and display success message
  // You can use fetch() to send a POST request to the API for booking

  // Clear the form after submission
  document.getElementById('name').value = '';
  document.getElementById('contact').value = '';
  document.getElementById('pickupDate').value = '';
});

// Load car list when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  displayCarList();
});
