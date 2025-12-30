import { useMemo } from "react";

export default function useTotalPrice(products) {
  return useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [products]);
}
