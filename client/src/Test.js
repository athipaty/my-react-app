import { useState } from "react"

export function Test() {
  
  const [count, setCount] = useState(0);

  function handdlePlus() {
    setCount( count + 1)
  }
  function handdleMinus() {
    setCount( count - 1)
  }

  return (
    <div className="text-center text-xl font-bold">
      <p>My first App!</p>
      <p>{count}</p>
      <button 
        className="bg-blue-500 py-2 px-4 mx-2 rounded text-white"
        onClick={handdleMinus}
      > -</button>
      <button 
        className="bg-blue-500 py-2 px-4 mx-2 rounded text-white"
        onClick={handdlePlus}
      > +</button>
    </div>
  )
}