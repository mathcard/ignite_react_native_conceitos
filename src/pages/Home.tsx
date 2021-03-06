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
  const [dark, setDark] = useState<boolean>(false);
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
    setTasks(task)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(row => row.id !== id))    
  }

  function handleTheme() {
    setDark(!dark);
  }

  return (
    <>
      <Header 
        dark={dark}
        onPress={handleTheme}  
      />

      <TodoInput addTask={handleAddTask} dark={dark}/>

      <MyTasksList 
        dark={dark}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}