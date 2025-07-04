'use client'

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from "../lib/data";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react';


const localizer = momentLocalizer(moment)

const BigCalender = () => {
  const [view , setView] = useState<View>(Views.WORK_WEEK)
  const handleonchange = (selectedView: View) =>{
      setView(selectedView);
  }
  return (
    <Calendar
      localizer={localizer}
      events={ calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={['month', 'work_week','day']}
      view={view}
      style={{ height: '90%'}}
      onView={handleonchange}
      min={new Date(1970, 1, 1, 8, 0)}
      max={new Date(1970, 1, 1, 13, 0)} 
    />

  ) 
}

export default BigCalender