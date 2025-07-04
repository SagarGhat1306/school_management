import FormModel from "@/app/components/FormModel"
import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import Tablesearch from "@/app/components/Tablsearch"
import { eventsData,role } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const col = [
    // {
    //     header :"info",accessor : "info"
    // },
    {
        header :"Title",
        accessor : "title", 
        className : "hidden md:table-cell"
    },

    {
        header :"Class",
        accessor : "class", 
        className : "hidden lg:table-cell"
    },
    {
        header :'Date',
        accessor : "date", 
        className : "hidden lg:table-cell"
    },
    {
        header :'Start Time',
        accessor : "startTime", 
        className : "hidden lg:table-cell"
    },
        {
        header :'End Time',
        accessor : "endTime", 
        className : "hidden lg:table-cell"
    },
    {
        header :"action",
        accessor : "action", 
        className : "hidden lg:table-cell"
    },
]

type EventList = {
    id:number,
    title : string,
    class: string,
    date: string,
    startTime: string,
    endTime :string,
}   



const  EventList  = () => {


const renderRow = (item: EventList ) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight even:bg-gray-50"
  >
       {/* <td className="p-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="hidden md:table-cell px-4 py-2 text-gray-700">{item.title}</span>
        </div>
      </div>
    </td> */}
    {/* Responsive Columns */}
        <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.title}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.class}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.date}</td>
        
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.startTime}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.endTime}</td>
    
    {/* Action Buttons */}
    <td className="px-4 py-2">
      <div className="flex items-center gap-2">
        {/* <Link href={`/list/teachers/${item.id}`}>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:bg-sky-500 transition duration-200"
            title="View"
          >
            <Image src="/image2/eye.png" alt="View" width={16} height={16} />
          </button>
        </Link
        > */}
           <FormModel table={"event"} type={"update"} />

        {role === "admin" && (
          // <button
          //   className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple hover:bg-purple-600 transition duration-200"
          //   title="Delete"
          // >
          //   <Image src="/image2/delete.png" alt="Delete" width={16} height={16} />
          // </button>
          <FormModel table={"event"} type={"delete"} />
        )}
      </div>
    </td>
  </tr>
);


    return (
        <div className="bg-white">
        <div className="flex items-center justify-between p-4 bg-white">
            <h1 className="hidden md:block text-lg font-semibold">Events</h1>
            <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                <Tablesearch />
                <div className="flex items-center gap-4 self-end">
                    <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <Image src="/image2/menu.png" alt="" width={14} height={14} />
                    </button>
                        <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <Image src="/image2/sort.png"  alt="" width={14} height={14} />
                    </button>
                  { role === 'admin' && 
                  // <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                  //       <Image src="/image2/plus.png"  alt="" width={14} height={14} />
                  //   </button>
                    
                     <FormModel table={"event"} type={"create"} />
                    }
                </div>
            </div>
    </div>
        <div>
                <Table col= {col} renderRow ={renderRow} data ={eventsData}/>
            </div>
         <Pagination />
         </div>
    )
}

export default   EventList 