import Announcements from "@/app/components/Annoucement"
import BigCalender from "@/app/components/BigCalender"
import EventCalender from "@/app/components/EventCalender"

const TeacherPage = () => {
    return (
   <div className="flex flex-col md:flex-row gap-6 p-4 h-full">
  {/* Left: Schedule */}
  <div className="w-full md:w-2/3 flex flex-col">
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">Schedule (Sagar)</h1>
      <BigCalender />
    </div>
  </div>

  {/* Right: Announcements */}
  <div className="w-full md:w-1/3 flex flex-col">
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <Announcements />
    </div>
  </div>
</div>

    )
}

export default TeacherPage



