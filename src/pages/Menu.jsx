import React from 'react'
import MenuList from '../components/menu/MenuList'

const Menu = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-serif mb-6">Our Menu</h1>
      <MenuList />
    </div>
  )
}

export default Menu