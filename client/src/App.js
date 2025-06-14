import { useState, useEffect } from "react"

export default function App() {
    const [catUrl, setCatUrl] = useState("")
    async function fetchCat() {
        const response = await fetch("https://cataas.com/cat?json=true")
        const data = await response.json();
        setCatUrl(data.url)
    }
    // 🟢 เพิ่ม useEffect ตรงนี้ (จะ fetch แมว 1 ตัวทันทีที่เปิดเว็บ)
    useEffect(() => {
        fetchCat();
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-2xl font-bold m-6">Random Cat</h1>
            <div className="text-center bg-white max-w-md p-6 rounded shadow">
                {catUrl ? (
                    <img src={catUrl} alt="Cat Image" width={300} height={250} className="rounded mb-4 object-cover w-72 h-72" />
                ) : (
                    <p>No cat image found</p>
                )}
                <button className="py-3 px-4 text-white bg-blue-500 rounded mt-4" onClick={fetchCat}

                >Rnadom</button>
            </div>
        </div>
    )
}