import { useState, useCallback } from "react";
import ProductList from "./components/productList";
import Counter from "./components/Counter";
import products from "./data/products";
import useTotalPrice from "./hooks/useTotalPrice";

export default function App() {
  const [count, setCount] = useState(0);

  const totalPrice = useTotalPrice(products);

  const handleProductSelect = useCallback((id) => {
    console.log("Selected product id:", id);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <Counter count={count} setCount={setCount} />

      <ProductList
        products={products}
        onSelect={handleProductSelect}
      />
    </div>
  );
}
