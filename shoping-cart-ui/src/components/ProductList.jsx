import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";

const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext);

  return (
    <>
      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
