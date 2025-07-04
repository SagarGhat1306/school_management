'use client'
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 10,

  },
  {
    name: 'Tue',
    present: 36,
    absent: 14,
  },
  {
    name: 'Wed',
    present: 45,
    absent: 5,

  },
  {
    name:'thru',
    present : 30,
    absent :20

  },
  {
    name: 'Fri',
    present: 43,
    absent: 7,
  },

];

const AttendanceChart = () => {
    return (
       <div className='bg-white rounded-lg p-4 w-full h-full '>
        <div className='flex justify-between item-center'>
            <h1 className='text-lg semibold'>Attentdance</h1>
            <Image src = "/image2/more.png" alt ="" width={20} height={20} />
        </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" vertical= {false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine ={false} tickMargin={10}/>
                <YAxis axisLine ={false} />
                <Tooltip contentStyle={{borderRadius :'10px', borderColor : 'lightgray'}}/>
                <Legend align='left' verticalAlign='top'  wrapperStyle={{paddingTop : '20px' , paddingBottom : '40px'}}/>
                <Bar dataKey="absent" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle'  radius={[10,10,0,0]}/>
                <Bar dataKey="present" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart