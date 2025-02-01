import React from 'react';

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.id){ //edit state
             const date = new Date();
             const updatedTaskList = tasklist.map((todo) => (
                todo.id === task.id ? {id:task.id, name:task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
             ))
            setTasklist(updatedTaskList);
            setTask({});
        }else{ //add state
            const date = new Date();
            const newTask = {
                id:date.getTime(),
                name:e.target.task.value,
                time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newTask]);
            setTask({}); // ensure the task object is empty after adding the task
        }
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Task name" name="task" value={task.name || ""} autoComplete='off' onChange={e => setTask({...task, name:e.target.value})}/>
                <button type="submit">{task.id ? "Update" : "Add Task"}</button>
            </form>
        </section>
  );
};