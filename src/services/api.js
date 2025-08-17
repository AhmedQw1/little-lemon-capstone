import axios from 'axios';

const api = axios.create({
  headers: {
    'x-rapidapi-key': 'f0df53f0f4mshe17aaea964e5229p165c56jsn0ed0ddb92003',
    'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// Get restaurant menu items with photos
export const getMenuWithPhotos = async () => {
  try {
    const params = new URLSearchParams();
    params.append('language', 'en_US');
    params.append('limit', '20');
    
    // Return mock data for now to avoid API calls
    return [
      {
        id: 1,
        name: "Classic Burger",
        description: "Angus beef patty with lettuce, tomato, and special sauce",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Main Course"
      },
      {
        id: 2,
        name: "Margherita Pizza",
        description: "Fresh tomatoes, mozzarella, basil, and olive oil",
        price: "$18.99",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Main Course"
      },
      {
        id: 3,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Starters"
      }
    ];
  } catch (error) {
    console.error('Error fetching menu:', error);
    return [];
  }
};

// Get restaurant reviews
export const getReviews = async () => {
  try {
    // Return mock data for now to avoid API calls
    return [
      {
        id: 1,
        rating: 5,
        text: "Amazing experience! The food was incredible and the service was outstanding.",
        author: "John D.",
        date: "2025-08-10"
      },
      {
        id: 2,
        rating: 4,
        text: "Great atmosphere and delicious food. Will definitely come back!",
        author: "Sarah M.",
        date: "2025-08-15"
      },
      {
        id: 3,
        rating: 5,
        text: "Best Italian food in the city! The pasta is homemade and amazing.",
        author: "Mike R.",
        date: "2025-08-16"
      }
    ];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};