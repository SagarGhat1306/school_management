import Announcements from "@/app/components/Annoucement"
import BigCalender from "@/app/components/BigCalender"


const ParentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row h-full">
            {/* left */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="h-full bg-white p-4 rounded-md ">
                    <h1 className="text-greay-100">Shedule (harsh)</h1>
                    <BigCalender/>
                </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
  
            <Announcements />
            </div>
        </div>
    )
}

export default ParentPage 



