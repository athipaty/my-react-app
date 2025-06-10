import { useState } from "react";

export default function App() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    function handleAddTask() {

        if(task.trim() === "") return

        const newTask = {
            id: list.length + 1,
            text: task,
        };

        setList([...list, newTask]);
        setTask(""); // ล้างค่า input หลังเพิ่ม
    }

    function handleDelete(id) {
        const updateList = list.filter(item => item.id !== id)
        setList(updateList);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">To do list</h1>

            <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                <input
                    type="text"
                    className="border px-4 py-2 w-full rounded"
                    placeholder="Input your task"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                />
                <button
                    className="bg-blue-500 px-4 py-2 rounded text-white w-full sm:w-auto"
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </div>

            <div className="mt-4 w-full max-w-md">
                {list.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border rounded px-4 py-2 mb-2 bg-white shadow-sm"
                    >
                        <span className="text-left">{item.text}</span>
                        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
