import './Tasks.css'
import { Task } from './Task'

export function Tasks({ tasks, onComplete, onDelete }) {
    const tasksQuantify = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    if (tasks.length === 0) {
        return null; // Si no hay tareas, no renderizar nada
    }

    return(
        <section className="tasks">
            <header className='task-header'>
                <div>
                    <p>To do</p>
                    <span>{tasksQuantify}</span>
                </div>
                <div>
                    <p>Complete</p>
                    <span>{completedTasks} of {tasksQuantify}</span>
                </div>
            </header>

            {tasks.map(task => (
                <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
            ))}

        </section>
    )
}