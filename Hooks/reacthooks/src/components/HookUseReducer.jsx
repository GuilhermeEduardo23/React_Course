import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando no useReducer

  const initialTasks = [
    { id: 1, text: "Study React" },
    { id: 2, text: "Study Java" },
  ];

  // aqui podemos criar uma função direta para usar o hook useReducer
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      /*case "COMPLETE":
        return state.filter((task) => (
          pensar em como aplicar cor verde marcando como concluído
        ))*/

      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  const taskCompleted = (id) => {
    dispatchTasks({ type: "COMPLETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Clique aqui para alterar o número!</button>
      <hr />
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button>Add Task</button>
      </form>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <div>
            <button
              onClick={() => taskCompleted(task.id)}
              className="buttonTasks"
            >
              ✅
            </button>
            <button onClick={() => removeTask(task.id)} className="buttonTasks">
              ❌
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default HookUseReducer;
