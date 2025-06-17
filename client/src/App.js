import { useState, useEffect } from "react";

export default function App() {
    const [input, setInput] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState("");
    const [pokemonList, setPokemonList] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [evolutionChain, setEvolutionChain] = useState([]);

    // ดึงรายชื่อโปเกมอนทั้งหมด
    useEffect(() => {
        async function fetchPokemonList() {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1300");
            const data = await res.json();
            setPokemonList(data.results.map(p => p.name));
        }
        fetchPokemonList();
    }, []);

    // ฟังก์ชัน fetch ข้อมูลโปเกมอนจากชื่อ
    async function fetchPokemon() {
        setPokemon(null);
        setError("");
        setShowSuggestions(false);
        setEvolutionChain([]); // reset chain
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
            );
            if (!response.ok) throw new Error("Not found");
            const data = await response.json();
            setPokemon(data);

            // 1. fetch species
            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();

            // 2. fetch evolution chain
            const evoResponse = await fetch(speciesData.evolution_chain.url);
            const evoData = await evoResponse.json();

            // 3. แปลง chain เป็น array (เช่น [bulbasaur, ivysaur, venusaur])
            const chainArr = [];
            let evo = evoData.chain;
            while (evo) {
                chainArr.push(evo.species.name);
                if (
                    evo.evolves_to &&
                    evo.evolves_to.length > 0
                ) {
                    evo = evo.evolves_to[0];
                } else {
                    evo = null;
                }
            }
            setEvolutionChain(chainArr);

        } catch (error) {
            setError("Pokemon not found or spelling error, please try again!");
        }
    }

    // fetch by id (สำหรับปุ่มลูกศร)
    async function fetchPokemonById(id) {
        setPokemon(null);
        setError("");
        setShowSuggestions(false);
        setEvolutionChain([]);
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );
            if (!response.ok) throw new Error("Not found");
            const data = await response.json();
            setPokemon(data);
            setInput(data.name);

            // species & evolution chain เหมือนใน fetchPokemon()
            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();
            const evoResponse = await fetch(speciesData.evolution_chain.url);
            const evoData = await evoResponse.json();

            const chainArr = [];
            let evo = evoData.chain;
            while (evo) {
                chainArr.push(evo.species.name);
                if (evo.evolves_to && evo.evolves_to.length > 0) {
                    evo = evo.evolves_to[0];
                } else {
                    evo = null;
                }
            }
            setEvolutionChain(chainArr);
        } catch (error) {
            setError("Pokemon not found!");
        }
    }

    // suggestion
    const suggestions = pokemonList
        .filter(
            name =>
                name.toLowerCase().includes(input.toLowerCase()) && input.length > 0
        )
        .slice(0, 10);

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            fetchPokemon();
            setShowSuggestions(false);
        }
    }

    async function fetchPokemonByName(name) {
        setPokemon(null);
        setError("");
        setEvolutionChain([]);
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
            );
            if (!response.ok) throw new Error("Not found");
            const data = await response.json();
            setPokemon(data);
            setInput(data.name);

            // fetch species & evolution chain
            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();
            const evoResponse = await fetch(speciesData.evolution_chain.url);
            const evoData = await evoResponse.json();

            const chainArr = [];
            let evo = evoData.chain;
            while (evo) {
                chainArr.push(evo.species.name);
                if (evo.evolves_to && evo.evolves_to.length > 0) {
                    evo = evo.evolves_to[0];
                } else {
                    evo = null;
                }
            }
            setEvolutionChain(chainArr);
        } catch (error) {
            setError("Pokemon not found!");
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
                    <div className="flex flex-col items-center">
                        <div className="flex items-center mb-2 gap-4">
                            <button
                                onClick={() => fetchPokemonById(pokemon.id - 1)}
                                className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                                disabled={pokemon.id <= 1}
                            >
                                ⬅️
                            </button>
                            <img
                                src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
                                alt={pokemon.name}
                                width={100}
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
                        <div className="mt-8 w-full">
                            <h3 className="font-semibold mb-2 text-center">Base Stats</h3>
                            <div className="flex flex-col gap-2">
                                {pokemon.stats.map((s, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="w-20 capitalize text-xs">{s.stat.name}</span>
                                        {/* Progress bar */}
                                        <div className="flex-1 h-4 bg-gray-200 rounded relative overflow-hidden">
                                            <div
                                                className="h-full bg-green-400"
                                                style={{ width: `${(s.base_stat / 180) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="ml-2 text-xs font-mono">{s.base_stat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {evolutionChain.length > 1 && (
                            <div className="mt-6">
                                <h3 className="font-semibold mb-2">Evolution Chain</h3>
                                <div className="flex items-center justify-center gap-4">
                                    {evolutionChain.map((name, idx) => (
                                        <div
                                            key={name}
                                            className="flex flex-col items-center cursor-pointer group"
                                            onClick={() => {
                                                setInput(name);
                                                fetchPokemonByName(name);
                                                setShowSuggestions(false);
                                            }}
                                            title={`ดูข้อมูล ${name}`}
                                        >
                                            <img
                                                src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
                                                alt={name}
                                                width={60}
                                                className={
                                                    pokemon.name === name
                                                        ? "ring-2 ring-yellow-400 group-hover:scale-110 duration-200"
                                                        : "group-hover:scale-110 duration-200"
                                                }
                                            />
                                            <span
                                                className={`capitalize text-xs mt-1 ${pokemon.name === name ? "font-bold text-yellow-600" : ""
                                                    }`}
                                            >
                                                {name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </div>
            <footer className="mt-8 text-xs text-gray-400">
                © 2025 TingTong | Powered by <a href="https://pokeapi.co/" className="underline" target="_blank" rel="noopener noreferrer">PokéAPI</a>
            </footer>
        </div>
    );
}
