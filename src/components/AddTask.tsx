import '../App.css'
import { IoAdd } from "react-icons/io5";
import { useState } from 'react' 

interface Prop{
    Add: (text: string) => void
}

export default function AddedTask({Add}: Prop){
    const [input, setInput] = useState('')

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        Add(input)
        setInput('')
    }

    return(
        <div className=' max-w-4xl mx-auto p-6 space-y-8'>
            <section>
                <form className=' flex gap-2 pt-4' onSubmit={handleSubmit}>
                    <input
                    onChange={e => {setInput(e.target.value)}} 
                    value={input}
                    placeholder='Add Task...'
                    className='flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300' type="text" />
                    <button type='submit' className='flex items-center space-x-2 border  px-4 py-2 rounded-md gap-2 font-bold'><span>Add Task</span> <IoAdd /></button>
                </form>
            </section>
            
        </div>
    )
}