export function Test() {

    function handleSearch(e) {
        console.log(e)
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Recipies Info</h1>
            <div className="bg-white p-6 rounded shadow max-w-md w-full text-center relative">
                <input 
                    type="text" 
                    placeholder="Miso Sauce" 
                    className="text-center py-2 px-4 border rounded w-2/3"
                    onChange={(e) => handleSearch(e.target.value)}
                 />
            </div>
            <footer className="mt-8 text-xs text-gray-400">
                © 2025 TingTong | Powered by <a href="https://songgyeok.sg/" className="underline" target="_blank" rel="noopener noreferrer">Songgyeok</a>
            </footer>
        </div>
    );
}
