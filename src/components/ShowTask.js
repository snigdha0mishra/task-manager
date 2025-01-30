import React from 'react';

export const ShowTask = ({tasklist, setTasklist, task, setTask}) => { // states are passed as props
    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id); // find the task to be edited
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(todo => todo.id !== id); //find the task to be deleted
        setTasklist(updatedTaskList);
    }
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className='title'>To Do</span>
                <span className='count'>{tasklist.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTasklist([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo) => ( // individual task is mapped to the list
                <li key={todo.id}>
                    <p>
                        <span className='name'>{todo.name}</span>
                        <span ClassName='time'>{todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(todo.id)}   className='bi bi-pencil-square'></i>
                    <i onClick={() => handleDelete(todo.id)} className='bi bi-trash'></i>
                </li>
            )) }
        </ul>
        
    </section>
  );
};