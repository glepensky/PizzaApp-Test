class PizzaApp {
    constructor() {
        this.restaurantList = [];
    }

    addRestaurant(restaurant) {
        if (!this.restaurantList.includes(restaurant)) {
            this.restaurantList.push(restaurant);
            return true; // Added successfully
        }
        return false; // Duplicate, not added
    }

    getRestaurants() {
        return this.restaurantList;
    }
}

module.exports = PizzaApp; // Export the class for testing
