import './Task.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineDelete } from "react-icons/ai";


export function Task({ task, onComplete, onDelete }) {
    return(
        <div className="task">
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