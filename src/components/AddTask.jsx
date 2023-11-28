import './AddTask.css'
import { useState } from 'react'


export function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="Add a new task" className="input" value={title} onChange={onChangeTitle}/>
            <button className='button'>Create</button>
        </form>
    )
}