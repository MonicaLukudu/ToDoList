import '../App.css'
import { MdDeleteOutline } from "react-icons/md";
import { IoAdd } from "react-icons/io5";


export default function Main(){
    return(
        <>
        <div className=' max-w-4xl mx-auto p-6 space-y-8'>
            <section>
                <form className=' flex gap-2 pt-4'>
                    <input className='flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300' type="text" />
                    <button type='submit' className='flex items-center space-x-2 border  px-4 py-2 rounded-md gap-2 font-bold'><span>Add Task</span> <IoAdd /></button>
                </form>
            </section>
            

            <section>
                <div className='flex items-center justify-start gap-8'>
                    <input type="checkbox" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, atque.</p>
                    <MdDeleteOutline />
                </div>
            </section>
        </div>
        </>
    )
}