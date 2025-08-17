import React from 'react'

const Specials = () => {
  const specials = [
    {
      id: 1,
      name: "Chef's Special Pasta",
      price: "$24.99",
      description: "Homemade pasta with seasonal ingredients",
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      price: "$29.99",
      description: "Fresh Atlantic salmon with herbs",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "Signature Dessert",
      price: "$12.99",
      description: "Chef's special dessert of the day",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-center">Today's Specials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((special) => (
            <div key={special.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={special.image}
                alt={special.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{special.name}</h3>
                <p className="text-gray-600 mb-2">{special.description}</p>
                <p className="text-primary font-bold">{special.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specials