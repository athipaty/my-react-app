function Greeting({name, job}) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-md p-6 
                        hover:shadow-xl hover:scale-105 transition-all duration-300">
          <img
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500"
            src="/TingTong.jpg"
            alt="Athipat"
          />
          <h2 className="text-xl font-bold text-center mt-4">{name}</h2>
          <p className="text-gray-600 text-center">{job}</p>
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              View Profile
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Greeting;
  