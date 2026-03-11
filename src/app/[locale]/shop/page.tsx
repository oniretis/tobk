import React from "react";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Science Ignite shirt",
    href: "#",
    price: "$48",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Math shirt",
    href: "#",
    price: "$35",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Earthen Bottle",
    href: "#",
    price: "$89",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Shirt",
    href: "#",
    price: "$35",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Shirt",
    href: "#",
    price: "$35",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Shirt",
    href: "#",
    price: "$35",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Machined Mechanical Shirt",
    href: "#",
    price: "$35",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Machined Mechanical Shirt",
    href: "#",
    price: "$35",
    imageSrc: "/cloth.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const Shop: React.FC = () => {
  return (
    <>
      <div className="bg-neutral-100 dark:bg-neutral-800">
        <div className="mx-auto max-w-2xl px-4 py-16  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="mt-16 mb-10 text-3xl  font-bold ">Latest Products.</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    width={500}
                    height={500}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-100">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
