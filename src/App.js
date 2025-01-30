import {useState, useEffect} from 'react';
import {Header} from './components/Header';
import {AddTask} from './components/AddTask';
import {ShowTask} from './components/ShowTask';
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []); //by default tasklist is empty
  // the tasklist is set to the value in the local storage
  const [task, setTask] = useState({});

  useEffect(() => {
     localStorage.setItem("tasklist", JSON.stringify(tasklist));
  },[tasklist]); //the useEffect hook is used to update the local storage whenever the tasklist is updated
  return (
    <div className="App">
      <Header />
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task = {task}
        setTask = {setTask}
        
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task = {task}
        setTask = {setTask}
        
      />

    </div>
  );
}

export default App;
