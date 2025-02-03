"use client"; // Ensure this runs on the client side in Next.js App Router

import React from "react";
import { useParams } from "next/navigation";

const ServicePage = () => {
  const params = useParams(); // Get params dynamically
  const id = params?.id;

  const data = [
    {
      id: 1,
      name: "Smart Watch X",
      category: "Smart Watches",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      description:
        "A stylish and modern smartwatch with health tracking features.",
    },
    {
      id: 2,
      name: "Wireless Headphones Pro",
      category: "Accessories",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 3,
      name: "Ultra Laptop 15",
      category: "Laptops",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      description:
        "A powerful laptop with an ultra-thin design and long battery life.",
    },
    {
      id: 4,
      name: "Phone Model Z",
      category: "Phones",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1512499617640-c2f99901822a",
      description:
        "A high-performance smartphone with an advanced camera system.",
    },
  ];

  // Find product by ID
  const selectedProduct = data.find((d) => d.id == id);

  return (
    <div>
      <h2>Dynamic Page</h2>
      <p>ID: {id}</p>
      {selectedProduct ? (
        <div>
          <p>Name: {selectedProduct.name}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Price: ${selectedProduct.price}</p>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width="300"
          />
          <p>Description: {selectedProduct.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ServicePage;
