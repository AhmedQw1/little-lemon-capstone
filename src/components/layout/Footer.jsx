import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Restaurant Street</p>
              <p className="mb-2">City, State 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@restaurant.com</p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Hours</h3>
            <ul>
              <li className="mb-2">Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li className="mb-2">Saturday: 10:00 AM - 11:00 PM</li>
              <li className="mb-2">Sunday: 10:00 AM - 9:00 PM</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/reservations" className="hover:text-primary transition-colors">
                  Reservations
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer