'use client';

import FormModel from "@/app/components/FormModel";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import Tablesearch from "@/app/components/Tablsearch";
import { role, studentsData } from "@/app/lib/data";
import Image from "next/image";

const col = [
  { header: "Info", accessor: "info" },
  { header: "Student ID", accessor: "studentId", className: "hidden md:table-cell" },
  { header: "Grade", accessor: "grade", className: "hidden md:table-cell" },
  { header: "Class", accessor: "class", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Action", accessor: "action", className: "hidden lg:table-cell" },
];

type StudentList = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const renderRow = (item: StudentList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight even:bg-gray-50"
  >
    <td className="p-4">
      <div className="flex items-center gap-4">
        <Image
          src={item.photo || "/noAvatar.png"}
          alt="Avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover hidden md:block"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{item.name}</span>
          <span className="text-xs text-gray-500">{item.class}</span>
        </div>
      </div>
    </td>

    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.studentId}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.grade}</td>
    <td className="hidden md:table-cell px-4 py-2 text-gray-700">{item.class}</td>
    <td className="hidden lg:table-cell px-4 py-2 text-gray-700">{item.phone}</td>
    <td className="hidden lg:table-cell px-4 py-2 text-gray-700">{item.address}</td>

    <td className="px-4 py-2">
      <div className="flex items-center gap-2">
        <FormModel table="student" type="update" />
        {role === "admin" && (
          <FormModel table="student" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);

const StudentListPage = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between p-4 bg-white">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Tablesearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <Image src="/image2/menu.png" alt="menu" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <Image src="/image2/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModel table="student" type="create" />
            )}
          </div>
        </div>
      </div>

      <div>
        <Table col={col} renderRow={renderRow} data={studentsData} />
      </div>

      <Pagination />
    </div>
  );
};

export default StudentListPage;
