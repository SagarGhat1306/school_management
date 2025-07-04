

    
import FormModel from "@/app/components/FormModel"
import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import Tablesearch from "@/app/components/Tablsearch"
import { resultsData,role } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const col = [
    {
        header :"info",accessor : "info"
    },

    {
        header :" subject",
        accessor : "subject", 
        className : "hidden md:table-cell"
    },

    {
        header :"Class",
        accessor : "class", 
        className : "hidden lg:table-cell"
    },

     {
        header :'teacher',
        accessor : "teacher", 
        className : "hidden lg:table-cell"
    },
    {
        header :'student',
        accessor : "student", 
        className : "hidden lg:table-cell"
    },
       {
        header :'Date',
        accessor : "date", 
        className : "hidden lg:table-cell"
    },
    {
        header :'Type',
        accessor : "type", 
        className : "hidden lg:table-cell"
    },
        {
        header :'score',
        accessor : "score", 
        className : "hidden lg:table-cell"
    },
    {
        header :"action",
        accessor : "action", 
        className : "hidden lg:table-cell"
    },
]


type ResultList = {
    id:number,
    subject : string,
    class: string,
    teacher: string,
    student:string,
    type : "Exam" | "assignment",
     date : string,
    score :number,
}

//     id: 1,
//     subject: "Math",
//     class: "1A",
//     teacher: "John Doe",
//     student: "John Doe",
//     date: "2025-01-01",
//     type: "exam",
//     score: 90,
//   },

const  ResultList  = () => {


const renderRow = (item:   ResultList  ) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight even:bg-gray-50"
  >
    {/* Info Cell with image and name */}
    {/* <td className="p-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{item.subject}</span>
        </div>
      </div>
    </td> */}

    {/* Responsive Columns */}
     <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.id}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.subject}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.class}</td>
    <td className="hidden lg:table-cell px-4 py-2 text-gray-700">{item.teacher}</td>
      <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.student}</td>
      <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.date}</td>

    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.type}</td>
          <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.score}</td>
    
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
        </Link> */}
          <FormModel table={"lesson"} type={"update"} />

        {role === "admin" && (
          // <button
          //   className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple hover:bg-purple-600 transition duration-200"
          //   title="Delete"
  
          // >
          //   <Image src="/image2/delete.png" alt="Delete" width={16} height={16} />
          // </button>

          <FormModel table={"lesson"} type={"delete"} />
        )}
      </div>
    </td>
  </tr>
);


    return (
        <div className="bg-white">
        <div className="flex items-center justify-between p-4 bg-white">
            <h1 className="hidden md:block text-lg font-semibold">Results</h1>
            <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                <Tablesearch />
                <div className="flex items-center gap-4 self-end">
                    <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <Image src="/image2/menu.png" alt="" width={14} height={14} />
                    </button>
                        <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <Image src="/image2/sort.png"  alt="" width={14} height={14} />
                    </button>
                  { role === 'admin' && <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <Image src="/image2/plus.png"  alt="" width={14} height={14} />
                    </button>}
                </div>
            </div>
    </div>
        <div>
                <Table col= {col} renderRow ={renderRow} data ={resultsData}/>
            </div>
         <Pagination />
         </div>
    )
}

export default   ResultList 