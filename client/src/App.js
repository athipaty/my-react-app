import { useEffect, useState } from "react"

export default function App() {

    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    function toggleRunning() {
        setIsRunning(!isRunning)
    }

    function handleReset() {
        setSecond(0);
        setIsRunning(false)
    }

    function formatTime(totalSeconds) {
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    }

    useEffect(() => {
        let internalId;
        if (isRunning) {
            internalId = setInterval(() => {
                setSecond((previous) => previous + 1)
            }, 1000)
        }

        return () => clearInterval(internalId)
    }, [isRunning])

    return (
        <div className="text-center">
            <h1 className="text-xl font-bold p-4 mb-2">Stop Watch</h1>
            <p className="mb-4 text-xl">{formatTime(second)}</p>

            <button
                className={`py-2 text-white px-4 rounded ${isRunning === true ? "bg-red-500" : "bg-blue-500"} transition-1s`}
                onClick={toggleRunning}
            >{isRunning === true ? "Pause" : "Start"}</button>

            <button
                className="bg-green-500 text-white py-2 px-4 rounded ml-2"
                onClick={handleReset}

            >Reset</button>

        </div>
    )
};