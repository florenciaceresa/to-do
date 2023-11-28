import './ToDo.css'
import { Fecha } from './Date'
import { AddTask } from './AddTask'
import { Tasks } from './Tasks'
import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'todo:savedTasks';



export function ToDo({ onAddTask, setTaskAndSave }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      loadSavedTasks();
    }, [])

    const handleAddTask = (newTask) => {
        // Cada tarea se agrega como un objeto independiente
        const newTaskObject = { id: tasks.length + 1, title: newTask };
        setTaskAndSave([...tasks, newTaskObject]);
      };

      function toggleTaskCompletedById(taskId) {
        const newTasks = tasks.map(task => {
          if(task.id === taskId) {
            return{
              ...task,
              isCompleted: !task.isCompleted
            }
          }
          return task;
        });
        setTaskAndSave(newTasks);
      }

      function deleteTaskById(taskId) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTaskAndSave(newTasks);
    }

    function loadSavedTasks() {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setTaskAndSave(JSON.parse(saved));
      }
    }

    function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  

  function setTaskAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
  

    return(
        <div className='to-do-container'>
            <Fecha/>
            <AddTask onAddTask={handleAddTask}/>
            <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskById}/>
            
        </div>
    )

}