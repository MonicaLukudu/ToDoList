import '../App.css'
import type {Task} from './type'
import { useState } from 'react';
import AddedTask from './AddTask';
import TodoItems from './Delete&CompleteTask';


export default function Main(){
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = (text: string) => {
        const newTask: Task = {id: Date.now(), text: text, isCompleted: false}
        setTasks([...tasks, newTask]);
    }
    const deleteTask = (id: number) =>{
        setTasks(tasks.filter(t => t.id !== id))
    }
    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => {
            if(t.id === id){
                return{...t, isCompleted:!t.isCompleted}
            }
            return t;
        }))
    }

    return(
        <div className='p-10 max-w-2xl mx-auto'>
            <AddedTask Add={addTask}/>
            <div className='flex flex-col'>
                {tasks.map(task =>{
                    return(
                        <TodoItems
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onToggle={toggleTask}/>
                    )
                })}
            </div>
        </div>
    )
}