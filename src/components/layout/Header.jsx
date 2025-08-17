import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <Navigation />
    </header>
  )
}

export default Header