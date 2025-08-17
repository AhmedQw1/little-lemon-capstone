import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Discover our passion for exceptional food and service. With over 20 years
              of culinary excellence, we take pride in creating memorable dining
              experiences for our guests.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of talented chefs combines classic techniques with modern
              innovation to bring you dishes that are both familiar and exciting.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Learn More
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Restaurant ambiance"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About