import {useParams} from 'react-router-dom'
import TaskDetails from '../components/TaskDetails'

const TaskDetailsPage = ({tasks}) => {
    const {id} = useParams()
    const task = tasks.find(task => task.id === parseInt(id, 10))

    return <div>
        <h2>Task Details</h2>
        <TaskDetails task={task}/>
    </div>
}

export default TaskDetailsPage