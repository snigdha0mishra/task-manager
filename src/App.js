import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { WeekProgress } from './components/WeekProgress';
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});
  const [productivity, setProductivity] = useState(JSON.parse(localStorage.getItem('productivity')) || Array(7).fill(false));
  const [tasksCompleted, setTasksCompleted] = useState(JSON.parse(localStorage.getItem('tasksCompleted')) || Array(7).fill(0));
  
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  useEffect(() => {
    localStorage.setItem('productivity', JSON.stringify(productivity));
  }, [productivity]);

  useEffect(() => {
    localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
  }, [tasksCompleted]);

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTaskList);

    const today = new Date().getDay();
    const updatedTasksCompleted = [...tasksCompleted];
    updatedTasksCompleted[today] += 1;
    setTasksCompleted(updatedTasksCompleted);

    if (updatedTasksCompleted[today] >= 50) {
      const updatedProductivity = [...productivity];
      updatedProductivity[today] = true;
      setProductivity(updatedProductivity);
    }
  };

  return (
    <div className="App">
      <Header />
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}
        handleDelete={handleDelete}
      />
      <WeekProgress />
    </div>
  );
}

export default App;