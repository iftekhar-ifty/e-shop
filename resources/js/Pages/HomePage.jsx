import { useEffect, useState } from "react";
import Layout from "./Layout";

function HomePage({productList}) {


    console.log(productList);
    const [perPage, setPerPage] = useState("5"); 
    const [products, setProducts] = useState([]);
    const handleChange = (e) => {
    setPerPage(e.target.value);
  };

// https://fakeapi.platzi.com/
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await fetch('https://api.escuelajs.co/api/v1/products');
    //             const data = await response.json();
    //             setProducts(data);
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         };

    //         };

    //         fetchProducts();



    //     }, []);


    return (
        <>

            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Our Products</h2>
                <div className="flex space-x-2">
                    <select id="quantity" value={perPage} onChange={handleChange} className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Filter</button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Sort By</button>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {
                    productList.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                        <div className="relative">
                                            <img  src="https://picsum.photos/200/300" alt={product.title} className="w-full h-48 object-cover"  loading="lazy" />
                                            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">Sale</span>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                                            <div className="flex items-center mb-2">
                                                <div className="flex text-yellow-400">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </div>
                                                <span className="text-gray-600 text-sm ml-2">({product.rating_count} reviews)</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <span className="text-lg font-bold text-gray-800">{product.price}</span>
                                                    <span className="text-sm text-gray-500 line-through ml-2">{product.price}</span>
                                                </div>
                                                <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                                                    <i className="fas fa-cart-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                    ))
                }
            

            </div>


            <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                    <a href="#" className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <a href="#" className="px-3 py-2 bg-blue-600 text-white border border-blue-600 rounded-lg">1</a>
                    <a href="#" className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">2</a>
                    <a href="#" className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">3</a>
                    <a href="#" className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">4</a>
                    <a href="#" className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </nav>
            </div>
        </>
    );
}
HomePage.layout = page => <Layout children={page} title="Welcome" />
export default HomePage;