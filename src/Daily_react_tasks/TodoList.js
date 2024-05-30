import React, { useState } from 'react';


const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
   const newTask = e.target.task.value;

    let taskItem = {
      id: Date.now(),
      title: newTask,
    };

    addTask(taskItem);
    e.target.task.value = '';
   
  };

  const [taskInput, setTaskInput] = useState('');

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  

  return (
    <div>
      <h1>Tasks To Do </h1>
    
      <form onSubmit={handleAddTask}>
        <input type="text" value={taskInput} onChange={handleChange} name="task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
         <h3> <li key={task.id}>
           {task.title}
            <button onClick={() => deleteTask(task.id)}>X</button>
          </li></h3>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
