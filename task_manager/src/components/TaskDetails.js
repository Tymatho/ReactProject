const TaskDetails = ({task}) =>{
    if(!task) {
        return <p>Task not found</p>
    }

    return <div>
        <h2>{task.title}</h2>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Status:</strong> {task.completed ? "Completed" : "Not Completed"}</p>
    </div>
}

export default TaskDetails