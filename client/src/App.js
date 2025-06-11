import { useState } from "react";

export default function App() {
    const products = [
        { id: 1, name: "Tooth Brush", price: 30 },
        { id: 2, name: "Tooth Plate", price: 45 },
        { id: 3, name: "Soap", price: 25 }
    ];

    const [cart, setCart] = useState([]);

    function handleCart(product) {
        setCart([...cart, product])
    }

    function handleDelete(index1) {
        const newUpdate = cart.filter((item, index2) => index1 !== index2)
        setCart(newUpdate)
    }

    return (
        <div className="text-center p-6">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {products.map((item) => (
                <div key={item.id} className="border p-3 mb-2 flex justify-between items-center max-w-md mx-auto shadow">

                    <div>
                        <p className="text-start">{item.name}</p>
                        <p className="text-gray-500 text-start">{item.price} Baht</p>
                    </div>

                    <button className="bg-blue-500 text-white px-3 py-1 rounded transition-transform duration-30 active:scale-95 focus:ouline-none shadow" onClick={() => handleCart(item)}>
                        Add
                    </button>

                </div>
            ))}

            {cart.length > 0 && (
                <p className="mt-4 font-bold">
                    รวมทั้งหมด: {cart.reduce((sum, item) => sum + item.price, 0)} Bath
                </p>
            )}

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">🛒 Shopping Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-gray-500">No profuct</p>
                ) : (
                    <ul className="max-w-md mx-auto text-left p-2">
                        {cart.map((item, index) => (
                            <li key={index} className="border-b py-2 flex justify-between">
                                <span>{item.name}</span>
                                <span>{item.price} ฿</span>
                                <button className="px-2 py-1 bg-gray-500 text-white rounded" onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>



        </div>
    )
}