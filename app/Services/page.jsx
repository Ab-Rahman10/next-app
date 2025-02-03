import Link from "next/link";
import React from "react";

const ServicesPage = () => {
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
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-center font-bold text-2xl my-5">Our Services</h2>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis atque
          facilis earum tempora rerum assumenda. Ratione, modi dolore eveniet,
          magnam quia ab sit odio necessitatibus blanditiis, quaerat corrupti
          nulla error.
        </p>
        <div>
          {data.map((d) => (
            <div>
              <Link href={`/Services/${d.id}`}>
                <img src={d.image} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
