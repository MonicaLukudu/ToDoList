import '../App.css'
import type {Task} from './type' 
import { MdDeleteOutline } from "react-icons/md";

interface Props{
    task: Task;
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

export default function TodoItems({task, onDelete, onToggle}: Props){

    return(
             <section className='w-full max-w-md mx-auto'>
                <div className='grid grid-cols-[40px_1fr_40px] items-center gap-4 border-b py-4 px-2 bg-white'>
                    <div className='flex justify-center'>
                        <input 
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => onToggle(task.id)} />
                    </div>
                    <div className='min-w-0'>
                        <p
                        className={`text-gray-800 text-base leading-tight wrap-break-words ${task.isCompleted ? 'line-through text-gray-400' : ''}`}>
                        {task.text}</p>
                    </div>
                    <div>
                        <MdDeleteOutline 
                        className='cursor-pointer text-red-500 text-2xl hover:text-red-700 transition-colors'
                        onClick={() => onDelete(task.id)}/>
                    </div>
                </div>
            </section>
    )
}