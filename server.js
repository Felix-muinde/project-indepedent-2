// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory storage for car bookings
let bookings = [];

// API endpoint to get all car bookings
app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

// API endpoint to add a new car booking
app.post('/api/bookings', (req, res) => {
  const newBooking = req.body;
  newBooking.id = Date.now(); // Generate a unique ID
  bookings.push(newBooking);
  res.json(newBooking);
});

// API endpoint to update a car booking by ID
app.put('/api/bookings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBooking = req.body;
  bookings = bookings.map((booking) => (booking.id === id ? { ...booking, ...updatedBooking } : booking));
  res.json(updatedBooking);
});

// API endpoint to delete a car booking by ID
app.delete('/api/bookings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  bookings = bookings.filter((booking) => booking.id !== id);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
