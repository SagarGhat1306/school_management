import Announcements from "@/app/components/Annoucement"
import BigCalender from "@/app/components/BigCalender"
import EventCalender from "@/app/components/EventCalender"



const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row h-full">
            {/* left */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="h-full bg-white p-4 rounded-md ">
                    <h1 className="text-greay-100">Shedule (4A)</h1>
                    <BigCalender/>
                </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalender />
            <Announcements />
            </div>
        </div>
    )
}

export default StudentPage 