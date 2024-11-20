import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;