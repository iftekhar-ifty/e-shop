import { useState } from "react";
import { Link } from '@inertiajs/react'
import Layout from "./Layout";

function Header() {
  const [openCart, setOpenCart] = useState(false);

//   const {cartList} = useOutletContext();

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <i className="fas fa-store text-blue-600 text-2xl mr-2"></i>
            <Link to="/" className="text-xl font-bold text-gray-800">
              <h1>ShopEasy</h1>
            </Link>
          </div>

          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-2 text-gray-500">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className="cart-icon relative">
            <button
              onClick={() => setOpenCart(!openCart)}
              className="text-gray-700 hover:text-blue-600"
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          2
              </span>
            </button>

            {openCart && (
              <div className=" absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                <h3 className="font-semibold text-lg mb-3">Your Cart</h3>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {/* {cartList.map((item, index) => (
                    <div key={index} className="flex items-center border-b pb-3">
                      <img
                        src={item.images[0]} alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="ml-3 flex-1">
                        <h4 className="font-medium text-sm">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-xs">1 x  {item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))} */}
                </div>

                <div className="mt-4 pt-3 border-t">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">$347.96</span>
                  </div>

                  <Link
                    to="/checkout"
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a
            href="profile.html"
            className="ml-4 text-gray-700 hover:text-blue-600"
          >
            <i className="fas fa-user text-xl"></i>
          </a>
        </div>
      </header>
    </>
  );
}
Header.layout = page => <Layout children={page} title="Welcome" />

export default Header;
