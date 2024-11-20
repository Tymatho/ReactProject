import {useState} from 'react'

const TaskForm = ({onSubmit, task={}}) => {
    const [title, setTitle] = useState(task.title || '')
    const [description, setDescription] = useState(task.description || '')

    const handleSubmit = (e) =>{
        e.preventDefault()
        onSubmit({title, description, completed: task.completed || false})
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea placeholder="Description"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        />
        <button type="submit">Save</button>
    </form>
}

export default TaskForm