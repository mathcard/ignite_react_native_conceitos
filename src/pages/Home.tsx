import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    console.log(newTaskTitle)
    if(newTaskTitle !== ''){
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false        
      }
      setTasks((oldState) => [...oldState, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const task = tasks.map((task) => {
      if(task.id === id) {
        return {...task, done: !task.done};        
      }
      return task
    });
    console.log(task)    
    //setState({todos: updatedList}); // set state to new object with updated list  
    setTasks(task)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(row => row.id !== id))    
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}