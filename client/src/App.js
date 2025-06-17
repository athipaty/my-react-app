import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ดึงรายชื่อโปเกมอนทั้งหมด (แค่ครั้งแรก)
  useEffect(() => {
    async function fetchPokemonList() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1300");
      const data = await res.json();
      setPokemonList(data.results.map(p => p.name));
    }
    fetchPokemonList();
  }, []);

  // ค้นหาข้อมูลโปเกมอนจากชื่อ
  async function fetchPokemon() {
    setPokemon(null);
    setError("");
    setShowSuggestions(false);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
      );
      if (!response.ok) throw new Error("Not found");
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      setError("Pokemon not found or spelling error, please try again!");
    }
  }

  // ค้นหาจาก id (ใช้กับปุ่มลูกศร)
  async function fetchPokemonById(id) {
    setPokemon(null);
    setError("");
    setShowSuggestions(false);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      if (!response.ok) throw new Error("Not found");
      const data = await response.json();
      setPokemon(data);
      setInput(data.name); // set ชื่อใน input ให้ด้วย
    } catch (error) {
      setError("Pokemon not found!");
    }
  }

  // หา suggestion จากที่ผู้ใช้พิมพ์
  const suggestions = pokemonList
    .filter(
      name =>
        name.toLowerCase().includes(input.toLowerCase()) && input.length > 0
    )
    .slice(0, 10);

  // กด enter เพื่อค้นหา
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      fetchPokemon();
      setShowSuggestions(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Pokemon Info</h1>
      <div className="bg-white p-6 rounded shadow max-w-md w-full text-center relative">
        {/* Input + Suggestion */}
        <div className="relative">
          <input
            type="text"
            value={input}
            className="mb-2 py-2 px-4 rounded w-2/3 border text-center"
            placeholder="Input a Pokemon"
            autoComplete="off"
            onChange={e => {
              setInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
          />
          {/* Suggestion list */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-1/2 -translate-x-1/2 w-2/3 bg-white border rounded mt-1 z-10 max-h-60 overflow-auto">
              {suggestions.map((name, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-left"
                  onClick={() => {
                    setInput(name);
                    setShowSuggestions(false);
                  }}
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className="bg-yellow-400 text-black px-4 py-2 rounded ml-2 font-bold"
          onClick={fetchPokemon}
        >
          Search
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* แสดงข้อมูลโปเกมอน + ลูกศรซ้ายขวา */}
        {pokemon && (
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center mb-2 gap-4">
              <button
                onClick={() => fetchPokemonById(pokemon.id - 1)}
                className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                disabled={pokemon.id <= 1}
              >
                ⬅️
              </button>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={120}
              />
              <button
                onClick={() => fetchPokemonById(pokemon.id + 1)}
                className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                ➡️
              </button>
            </div>
            <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>
              Type: {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
            <p>
              Abilities: {pokemon.abilities
                .map((a) => a.ability.name)
                .join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
