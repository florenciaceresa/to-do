import './Task.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineDelete } from "react-icons/ai";
import { useDarkMode } from './DarkModeContext';



export function Task({ task, onComplete, onDelete }) {
    const { darkMode } = useDarkMode();

    return(
        <div className={`child-component ${darkMode ? 'dark-mode' : 'task'}`}>
            <button className='check-container' onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill className='icon-completed'/> : <div/>}
            </button>

            <p className={task.isCompleted ? 'task-completed' : ''}>{task.title}</p>

            <button className='delete-button' onClick={() => onDelete(task.id)}>
                <AiOutlineDelete className='delete' />
            </button>

        </div>
    )
}