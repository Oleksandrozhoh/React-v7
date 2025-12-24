import ProductList from "./components/ProductList";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6 pt-20">
        <h1 className="text-2xl font-bold mb-6 mt-6">Product Catalog</h1>
        <ProductList />
      </div>
    </>
  );
};

export default App;
