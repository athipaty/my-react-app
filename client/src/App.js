import { useState } from "react"

export default function App() {

    const [celsius, setCelsius] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")

    return (
        <div className="text-center p-6">
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
                    className="border px-4 py-2 text-center w-64  rounded"
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
        </div>
    )
}