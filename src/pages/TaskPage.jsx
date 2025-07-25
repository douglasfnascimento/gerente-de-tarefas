import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title.jsx";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return <div className="w-screen h-screen bg-slate-500 p-6">
        <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
            <button onClick={() => navigate(-1)} className="absolute left-0 text-slate-100">
                <ChevronLeftIcon />
            </button>
            <Title>
              Detalhes da Tarefa
            </Title>
        </div>
        <div className="bg-slate-200 rounded-md p-4">
            <h2 className="text-xl font-bold text-slate-600"> {title}</h2>
            <p className="text-slate-600"> {description}</p>
        </div>
        </div>
    </div>;
}

export default TaskPage;