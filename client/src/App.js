import { useState } from "react"

export default function App() {

    const [celsius, setCelsius] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")
    const [mode, setMode] = useState("light");

    function handleReset() {
        setCelsius("");
        setFahrenheit("");
    }

    function handleTheme() {
        setMode(mode === "light" ? "dark" : "light")
    }

    return (
        <div className={`text-center p-6 ${mode === "light" ? "bg-white text-black" : "bg-gray-900 text-white" }`}>
            <h1 className="text-2xl font-bold mb-6">Temperature Calculation</h1>
            <div className="mb-4 ">
                <label className="font-medium mb-2 block">Celsius</label>
                <input
                    type="number"
                    value={celsius}
                    onChange={(e) => {
                        const c = e.target.value;
                        setCelsius(c);
                        setFahrenheit(c === "" ? "" : (parseFloat(c * 9 /5 +32).toFixed(2)))
                    }}
                    className="border px-4 py-2 text-center w-64 rounded text-gray-700 bg-gray-100"
                    placeholder="Input a Celsius"
                />
            </div>
            <div className="mb-4 ">
                <label className="font-medium mb-2 block">Fahrenheit</label>
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={(e) => {
                        const f = e.target.value;
                        setFahrenheit(f);
                        setCelsius(f === "" ? "" : (((parseFloat(f)-32) / 9 * 5).toFixed(2)))
                    }}
                    className="border rounded px-4 py-2 text-center bg-gray-100 text-gray-700 w-64"
                    placeholder="Input a Fahrenheit"
                />
            </div>
            
            <button 
                onClick={handleReset}
                className="bg-red-500 px-4 py-2 rounded text-white mt-2"
            >Reset</button>

            <button
                className="rounded boder mb-4 py-2 px-4 ml-2 bg-blue-500 text-white"
                onClick={handleTheme}
            >Mode</button>
        </div>
    )
}