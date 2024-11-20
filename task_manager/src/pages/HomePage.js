import TaskList from '../components/TaskList';

const HomePage = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      <h2>All Tasks</h2>
      <TaskList tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

export default HomePage;