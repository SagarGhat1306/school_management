
import FormModel from "@/app/components/FormModel"
import Pagination from "@/app/components/Pagination"
import Table from "@/app/components/Table"
import Tablesearch from "@/app/components/Tablsearch"
import { parentsData, role, studentsData} from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const col = [
    {
        header :"info",accessor : "info"
    },

    {
        header :"Studnets",
        accessor : "Students", 
        className : "hidden md:table-cell"
    },

    {
        header :"Phone",
        accessor : "phone", 
        className : "hidden lg:table-cell"
    },

    {
        header :"Address",
        accessor : "address", 
        className : "hidden lg:table-cell"
    },
    {
        header :"Action",
        accessor : "action", 
        className : "hidden lg:table-cell"
    },
]

type parentsList = {
    id:number,
    name : string,
    students:string[],
    email?:string,
    phone?:string,
    address:string,
}

const renderRow = (item: parentsList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight even:bg-gray-50"
  >
    {/* Info Cell with image and name */}
    <td className="p-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{item.name}</span>
          <span className="text-xs text-gray-500">{item?.email}</span>
        </div>
      </div>
    </td>

    {/* Responsive Columns */}

    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.students.join(", ")}</td>
    <td className="hidden lg:table-cell px-4 py-2 text-gray-700">{item.phone}</td>
    <td className="hidden lg:table-cell px-4 py-2 text-gray-700">{item.address}</td>

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



        {role === "admin" && (
          // <button
          //   className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple hover:bg-purple-600 transition duration-200"
          //   title="Delete"
  
          // >
          //   <Image src="/image2/delete.png" alt="Delete" width={16} height={16} />
          // </button>
          <>
        <FormModel table = 'parent' type ='update'data = {item} />
              <FormModel table = 'parent' type = 'create' id= {item.id} />
          </>
       
        )}
      </div>
    </td>
  </tr>
);


const ParentList = () => {




    return (
        <div className="bg-white">
        <div className="flex items-center justify-between p-4 bg-white">
            <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
                <Table col= {col} renderRow ={renderRow} data ={parentsData}/>
            </div>
         <Pagination />
         </div>
    )
}

export default ParentList