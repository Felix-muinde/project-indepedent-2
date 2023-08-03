// app.js
const bookingList = document.getElementById('bookingList');

function displayBookings(bookings) {
  bookingList.innerHTML = '';
  bookings.forEach((booking) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${booking.car} - ${booking.model} 
      <button onclick="updateBooking(${booking.id})">Update</button>
      <button onclick="deleteBooking(${booking.id})">Delete</button>`;
    bookingList.appendChild(listItem);
  });
}

function addBooking() {
  const carInput = document.getElementById('car');
  const modelInput = document.getElementById('model');

  const newBooking = {
    car: carInput.value,
    model: modelInput.value,
  };

  fetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBooking),
  })
    .then((response) => response.json())
    .then((data) => {
      carInput.value = '';
      modelInput.value = '';
      bookings.push(data);
      displayBookings(bookings);
    });
}

function updateBooking(id) {
  const carInput = document.getElementById('car');
  const modelInput = document.getElementById('model');

  const updatedBooking = {
    car: carInput.value,
    model: modelInput.value,
  };

  fetch(`/api/bookings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedBooking),
  })
    .then((response) => response.json())
    .then((data) => {
      const index = bookings.findIndex((booking) => booking.id === id);
      bookings[index] = data;
      displayBookings(bookings);
    });
}

function deleteBooking(id) {
  fetch(`/api/bookings/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      bookings = bookings.filter((booking) => booking.id !== id);
      displayBookings(bookings);
    });
}

// Fetch initial booking data
let bookings = [];
fetch('/api/bookings')
  .then((response) => response.json())
  .then((data) => {
    bookings = data;
    displayBookings(bookings);
  });
