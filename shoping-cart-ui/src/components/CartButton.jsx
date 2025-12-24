import { CartContext } from "../context/CartContext.jsx";
import { useState } from "react";
import { useContext } from "react";

const CartButton = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const itemsTotal = cartItems
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        setShowDropdown(!showDropdown);
      }}
    >
      <header className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-md shadow-md hover:bg-blue-800">
        <h1 className="text-md font-bold pr-2">Cart</h1>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cartItems.length > 0 && (
            <div>
              <span className="absolute -top-5 -right-5 bg-red-600 text-white rounded-full px-3 py-1 text-xs">
                {itemCount}
              </span>
            </div>
          )}
        </div>
      </header>
      {showDropdown && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 pb-4 mt-1 mr-2 w-84 bg-white border border-gray-300 rounded-sm shadow-lg z-20"
        >
          <h2 className="text-md font-semibold my-2">Cart Items</h2>
          {cartItems.length === 0 ? (
            <p className="p-4">Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col border-b border-gray-200"
                  >
                    <div className="flex justify-between items-center p-2">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-6 object-cover rounded"
                        />
                        <p className="font-medium text-sm">{item.name}</p>
                      </div>
                      <div>
                        <p className="text-sm">
                          {item.quantity} x ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <a
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-600 hover:text-red-800 cursor-pointer mb-3 decoration underline"
                    >
                      Remove Item
                    </a>
                  </li>
                ))}
              </ul>
              <div className="p-4 border-t border-gray-200">
                <p className="font-bold">Total: ${itemsTotal}</p>
              </div>
              <a
                type="button"
                className="text-md bg-blue-600 py-2 px-10 rounded-xl text-white"
                onClick={clearCart}
              >
                Clear Cart
              </a>
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default CartButton;
