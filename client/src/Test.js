import { useState } from "react";
export function Test() {
    const [count, setCount] = useState(0);
    return (
        <div className="m-4 .w-5 border-2 flex justify-center gap-2 flex-col p-4 items-center">
            <h1>{count}</h1>
            <div className="flex gap-4">
                <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300" >Minus</button>
            </div>
        </div>
    );
}