
import FormModel from "@/app/components/FormModel"
import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import Tablesearch from "@/app/components/Tablsearch"
import { role, teachersData } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"
// import { itemAxisPredicate } from "recharts/types/state/selectors/axisSelectors"

const col = [
    {
        header :"info",accessor : "info"
    },
    {
        header :"Teacher ID",
        accessor : "TeacherID", 
        className : "hidden md:table-cell"
    },
    {
        header :"Subject ID",
        accessor : "SubjectID", 
        className : "hidden md:table-cell"
    },

    {
        header :"Classes ID",
        accessor : "classesID", 
        className : "hidden md:table-cell"
    },

    {
        header :"Phone ID",
        accessor : "phone", 
        className : "hidden lg:table-cell"
    },

    {
        header :"Address ID",
        accessor : "address", 
        className : "hidden lg:table-cell"
    },
    {
        header :"Action",
        accessor : "action", 
        className : "hidden lg:table-cell"
    },
]

type TeacherList = {
    id:number,
    teacherId : string,
    name : string,
    email?:string,
    photo:string,
    phone:string,
    subjects:string[],
    classes:string[],
    address:string,

}
const TeachersList = (item : TeacherList) => {


const renderRow = (item: TeacherList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight even:bg-gray-50"
  >
    {/* Info Cell with image and name */}
    <td className="p-4">
      <div className="flex items-center gap-4">
        <Image
          src="/noAvatar.png"
          alt="Avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover hidden md:block"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{item.name}</span>
          <span className="text-xs text-gray-500">{item?.email}</span>
        </div>
      </div>
    </td>

    {/* Responsive Columns */}
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.teacherId}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">
      {item.subjects.join(", ")}
    </td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">
      {item.classes.join(", ")}
    </td>
    <td className="hidden lg:table-cell px-4 py-2 text-gray-700">{item.phone}</td>
    <td className="hidden lg:table-cell px-4 py-2 text-gray-700">{item.address}</td>

    {/* Action Buttons */}
    <td className="px-4 py-2">
      <div className="flex items-center gap-2">
        {/* <Link href={`/dashboard/Menu_list/teachers/${item.id}`}>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:bg-sky-500 transition duration-200"
            title="View"
          >
            <Image src="/image2/eye.png" alt="View" width={16} height={16} />
          </button>
        </Link> */}
    <FormModel table = 'teacher' type = 'update'  id = {item.id}/>
    
         {role === "admin" && 
        (
          // <button
          //   className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple hover:bg-purple-600 transition duration-200"
          //   title="Delete"
          // >
          //   <Image src="/image2/delete.png" alt="Delete" width={16} height={16} />
          // </button>

          <FormModel table = 'teacher' type = 'delete'  id = {item.id}/>
        )} 
  
      </div>
    </td>
  </tr>
);


    return (
        <div className="bg-white">
        <div className="flex items-center justify-between p-4 bg-white">
            <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
            <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                <Tablesearch />
                <div className="flex items-center gap-4 self-end">
                    <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <Image src="/image2/menu.png" alt="" width={14} height={14} />
                    </button>
                        <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                        <Image src="/image2/sort.png"  alt="" width={14} height={14} />
                    </button>
               {   role === 'admin' && 
               (  
              //  <button  className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              //           <Image src="/image2/plus.png"  alt="" width={14} height={14} />
              //       </button>

              <FormModel table = 'teacher' type = 'create' id= {item.id} />
                  )}
                    
                </div>
            </div>
    </div>
        <div>
                <Table col= {col} renderRow ={renderRow} data={teachersData}/>
            </div>
         <Pagination />
         </div>
    )
}

export default TeachersList