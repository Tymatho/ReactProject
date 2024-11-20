import { useNavigate } from "react-router-dom"
import TaskForm from "../components/TaskForm"

const AddTaskPage = ({addTask}) => {
    const navigate = useNavigate()
    const handleSubmit = (task) => {
        const newTask = {...task, id:Date.now(), completed: false}
        addTask(newTask)
        navigate("/")
    }

    return <div>
        <h2>Add New Task</h2>
        <TaskForm onSubmit={handleSubmit}/>
    </div>
}

export default AddTaskPage