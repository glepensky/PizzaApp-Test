// Define PizzaApp class
// Initialize restaurantList as empty array

class PizzaApp {
    constructor() {
        this.restaurantList = [];
    }

    // addRestaurant method takes in a restaurant as an argument
    // Checks is restaurant is on list
    // If not, it gets add via push and returns true
    // If it is already on the list, it returns false

    addRestaurant(restaurant) {
        if (!this.restaurantList.includes(restaurant)) {
            this.restaurantList.push(restaurant);
            return true; // Added successfully
        }
        return false; // Duplicate, not added
    }

    // Returns current list of restaurants

    getRestaurants() {
        return this.restaurantList;
    }
}

module.exports = PizzaApp; // Export the class for testing
