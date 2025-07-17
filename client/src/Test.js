import { useState } from "react"

export function Test() {
    const [count, setCount] = useState(0);
    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
            <button
                className="bg-blue-500 rounded text-white px-4 py-2 hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
            >Add</button>
        </div>
    )
}