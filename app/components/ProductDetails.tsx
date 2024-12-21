"use client";

import { useState, useEffect } from "react";

type Product = {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
};

export default function ProductDetails({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch product details when the component loads
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/product/${id}`);
        const data: Product = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    }
    fetchProduct();
  }, [id]);

  // Handle Add to Cart
  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id, userId: "currentUserId" }), // Replace with actual user ID
      });
      if (res.ok) {
        alert("Product added to cart!");
      } else {
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // Render loading state
  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
