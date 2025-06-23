import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function Tasks( { tasks, onTaskClick, onDeleteTaskClick }) {


  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const querry = new URLSearchParams();
    querry.set("title", task.title);
    querry.set("description", task.description);
    navigate(`/task?${querry.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left bg-slate-400 w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
