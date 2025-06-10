export default function Test({ users, handleDelete }) {
  return (
    <div>
      {users.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded shadow">
          <h1>Your name is {item.name}</h1>
          <h1>You are {item.age} year old!</h1>
          <h1>Your hobby is {item.hobby}</h1>

          <button
            className="bg-red-500 text-white p-2 mt-2"
            onClick={() => handleDelete(item.id)} // ✅ ส่ง id ให้
          >
            ลบ
          </button>
        </div>
      ))}
    </div>
  );
}
