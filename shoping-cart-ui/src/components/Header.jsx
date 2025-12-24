import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="bg-gray-200 fixed left-0 right-0 p-4 mb-6 flex justify-between items-center shadow-2xl z-10">
      <h1 className="text-4xl font-bold">ShopMate</h1>
      <CartButton />
    </header>
  );
};

export default Header;
