// Import PizzaApp class
const PizzaApp = require('./PizzaApp');

// Function of testEnsureNoDuplicateRestaurants will test 
// add Restaurant
// Also logs name of test case

function testEnsureNoDuplicateRestaurants() {
    console.log("Running Test Case: PizzaApp");

    // Preconditions: Initialize the app
    const app = new PizzaApp();

    // Test Steps
    const restaurant = 'Wrecktangle Pizza';
    const firstAdd = app.addRestaurant(restaurant); // Step 1
    const secondAdd = app.addRestaurant(restaurant); // Step 2
    const restaurants = app.getRestaurants(); // Step 3

    // Expected Result
    if (firstAdd !== true) {
        console.error("FAIL: The first addition should succeed.");
        return;
    }

    if (secondAdd !== false) {
        console.error("FAIL: The second addition should be rejected.");
        return;
    }

    if (JSON.stringify(restaurants) !== JSON.stringify(['Wrecktangle Pizza'])) {
        console.error("FAIL: The restaurant list should contain only one 'Wrecktangle Pizza'.");
        return;
    }

    console.log("PASS: The restaurant is not added twice.");
}

// Run the test
testEnsureNoDuplicateRestaurants();
