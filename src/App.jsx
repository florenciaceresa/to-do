import { useEffect, useState } from 'react'
import { ToDo } from './components/ToDo'
import { DarkModeProvider } from './components/DarkModeContext';


const LOCAL_STORAGE_KEY = 'todo:savedTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  

  function setTaskAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(TaskTitle) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: TaskTitle,
        isCompleted: false
      }
    ]);
  }

  

  return (
    <DarkModeProvider>
      <ToDo onAddTask={addTask} setTaskAndSave={setTaskAndSave}/>
    </DarkModeProvider>

  )
}

export default App
