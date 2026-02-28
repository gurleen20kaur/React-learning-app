import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProduct] = useState<string[]>([]);

  //Using Effect Hook to call the server to fetch the product
  // Executed after every render
  // Updating the state triggers another render
  // Causes an Infinite loop
  // Pass an array of dependencies as a second argument
  // so it is only execute after the initial render
  useEffect(() => {
    console.log("Fetching products");
    setProduct(["Clothing", "Household"]);
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
