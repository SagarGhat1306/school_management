"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const schoolEvents = [
  { id: 1 ,title: "Science Exhibition", time: "09:00 AM", frequency: "Annual",    description: "Students showcase science projects and experiments." },
  {id: 2 , title: "Inter-School Debate Competition", time: "10:30 AM", frequency: "Monthly",   description: "Teams compete on current affairs and topics." },
  {id: 3 , title: "Annual Sports Day Opening", time: "11:00 AM", frequency: "Annual",  description: "Track and field events, team games, and medals." },
  { id: 4 ,title: "Student Council Election Speeches", time: "12:30 PM", frequency: "Annual" , description: "Track and field events, team games, and medals."},
  { id: 5 ,title: "Cultural Fest", time: "01:30 PM", frequency: "Annual",    description: "Music, dance, drama performances by students." },
  {id: 6 , title: "Parent-Teacher Conference", time: "02:00 PM", frequency: "Quarterly" ,  description: "Parents and teachers discuss student progress."},
  {id: 7 , title: "Mental Health Workshop", time: "02:30 PM", frequency: "Biannual" ,  description: "Parents and teachers discuss student progress."},
  {id: 8 , title: "Alumni Meet", time: "03:00 PM", frequency: "Annual" ,  description: "Parents and teachers discuss student progress."},
  {id: 9 , title: "Farewell Party", time: "03:30 PM", frequency: "Annual" ,  description: "Parents and teachers discuss student progress." },
  { id: 10 ,title: "Prize Distribution", time: "04:00 PM", frequency: "Annual",  description: "Parents and teachers discuss student progress." },
];

const EventCalender = () => {
   const [value, onChange] = useState<Value>(new Date());
    return (
     <div className='bg-white p-4'>
        <Calendar onChange={onChange} value={value} />
        <div className='gap-20'>
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <div className='flex flex-col gap-6'>
                {schoolEvents.map((e) => (
                <div className="bg-gray-20 rounded-2xl p-4 shadow gap-20" key={e.id}>
                    <h1 className="text-lg font-semibold mb-1">{e.title}</h1>
                    <span className="text-sm text-gray-600">{e.time}</span>
                    <h3 className="text-sm text-gray-700 mt-2">{e.description}</h3>
                </div>
                ))}
            </div>
        </div>
    </div>
        
    )
}
export default EventCalender