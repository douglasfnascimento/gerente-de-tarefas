import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col  gap-2">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-700 transition-colors duration-200"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos.");
          } else {
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
