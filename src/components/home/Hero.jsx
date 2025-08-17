import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMenuWithPhotos } from '../../services/api'

const Hero = () => {
  const [foodImage, setFoodImage] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      const menu = await getMenuWithPhotos();
      // Find an Italian food item (e.g., Margherita Pizza)
      // Find an Italian food item (Margherita Pizza)
  // Use user's own image instead of API
  setFoodImage('/italianfood.png');
    }
    fetchImage();
  }, []);

  return (
    <div className="relative h-[80vh] flex items-center bg-primary-green mt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white z-20 md:order-1 order-2">
          <h1 className="font-markazi text-primary-yellow text-6xl md:text-7xl mb-2">
            Little Lemon
          </h1>
          <h2 className="font-markazi text-white text-4xl mb-4">Chicago</h2>
          <p className="font-karla text-xl mb-8 max-w-md">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link
            to="/reservations"
            className="inline-block px-6 py-3 bg-primary-yellow text-highlight-dark font-bold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="hidden md:flex justify-end items-center md:order-2 order-1">
          {foodImage ? (
            <img
              src={foodImage}
              alt="Italian Food"
              className="rounded-full shadow-2xl w-[500px] h-[350px] object-cover border-4 border-white"
            />
          ) : (
            <div className="w-[500px] h-[350px] bg-gray-200 rounded-full animate-pulse" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero