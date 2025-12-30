import { useEffect } from "react";

export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  useEffect(() => {
    console.log("onSelect function reference changed");
  }, [onSelect]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => onSelect(product.id)}>
            Select
          </button>
        </li>
      ))}
    </ul>
  );
}
