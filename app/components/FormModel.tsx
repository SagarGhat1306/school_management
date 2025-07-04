'use client'
import Image from "next/image";
import { useState } from "react";
import TeacherForm from "../dashboard/froms/TeacherForm";
const FormModel = ({table , type , data , id} : 
    {table: 
        | "teacher"
        | "student"
        | "parent"
        | "subject"
        | "class"
        | "lesson"
        | "exam"
        | "assienment"
        | "event"
  
        type : 'create' | 'update' | 'delete' ;
        data? : any;
        id ?: number;
    }) =>{


        const size = type === 'create' ? ' w-10 h-5 ':' w-10 h-5'
        const bgcolor = type === 'create' ? '#	#004e80':'#rgb(235, 215, 61)'

        const [open , setOpen] = useState(false)

    const Form = () => {
        return type === 'delete' && id ? (
            <form action='' className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium "> All Data will be lost Are You want to delete this {table}</span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center" >Delete</button>
            </form>
        ): (
        // "create or update form"
        <TeacherForm type = "create"/>
    )
    } 


    return(
        <>
        <button className={`${size} flex items-center justify-center rounded-full ${bgcolor}` }
            onClick={()=> (
                setOpen(true)
            )}
        >
        <Image src = { `/image2/${type}.png`} alt ="" width={14} height={14}  />
        </button>

        {open && 
        <div className="w-screen h-screen absolute left-0 top-0 bg-black/80 z-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
            <Form />
            <div
            className="absolute top-4 right-4 cursor-pointer z-10"
            onClick={() => setOpen(false)}
            >
            <Image src="/image2/close.png" alt="" width={30} height={30} />
            </div>
        </div>
        </div>

        }
        </>
    
    )
}
export default FormModel