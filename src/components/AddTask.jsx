import './AddTask.css'
import { useState } from 'react'
import { useDarkMode } from './DarkModeContext';



export function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('');
    const { darkMode } = useDarkMode();

    
    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit} className={`child-component ${darkMode ? 'dark-mode' : 'form'}`}>
            <input type="text" spellCheck="false" placeholder="Add a new task" className="input" value={title} onChange={onChangeTitle}/>
            <button className='button'>Create</button>
        </form>
    )
}