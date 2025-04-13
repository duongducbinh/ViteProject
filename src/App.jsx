import { useState } from "react";

function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("tasks")) || []
    )
  });

  const addTask = () => {
    setTasks(prev => {
      const newTask = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(newTask));
      return newTask;}
    );
    setTask("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <input type="text"
      onChange={(e => setTask(e.target.value))}
      value={task}
      />
      <button onClick={addTask}>add task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;