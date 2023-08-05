
  
  // Sample user data (dummy data for demonstration purposes)
  const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Add more users here...
  ];
  
  function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    // Simple user authentication check
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      showCarsList();
    } else {
      alert("Invalid username or password");
    }
  }
  
  function showCarsList() {
    const carsListContainer = document.querySelector(".cars-list");
    carsListContainer.innerHTML = ""; // Clear previous content
  
    // Display each car
    cars.forEach(car => {
      const carElement = document.createElement("div");
      carElement.innerHTML = `
        <h3>${car.make} ${car.model} (${car.year})</h3>
        <p>Price: $${car.price}</p>
        <button onclick="deleteCar(${car.id})">Delete</button>
        <button onclick="updateCar(${car.id})">Update</button>
      `;
      carsListContainer.appendChild(carElement);
    });
  }
  
  function deleteCar(carId) {
    cars = cars.filter(car => car.id !== carId);
    showCarsList();
  }
  
  function updateCar(carId) {
    const carToUpdate = cars.find(car => car.id === carId);
    if (carToUpdate) {
      // Example: Prompt the user to update the car price
      const newPrice = prompt("Enter the new price:");
      if (newPrice) {
        carToUpdate.price = parseFloat(newPrice);
        showCarsList();
      }
    }
  }
  