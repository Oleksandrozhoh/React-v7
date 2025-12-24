import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow p-4 flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-semi-bold">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <p className="mt-auto font-bold text-lg">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
