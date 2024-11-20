import { useNavigate } from "react-router-dom";

const TaskItem = ({ task, onDelete, onToggle }) => {
  const navigate = useNavigate()
    return (
      <div>
        <h3>
          {task.title}
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => navigate(`/task/${task.id}`)}>Details</button>
        </h3>
        <p>{task.description}</p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      </div>
    );
  };
  
  export default TaskItem;  