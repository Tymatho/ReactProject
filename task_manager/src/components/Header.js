import {Link} from 'react-router-dom'

const Header = () => {
    <header>
        <h1>Task Manager</h1>
        <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Task</Link>
        </nav>
    </header>
}

export default Header