"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { Boys: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { Girls: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },

];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl ">
      {/* Title */}
      <div className='flex justify-between p-5 items-center'>
        <h1 className='text-lg font-semibold'>Student</h1>
        <Image src="/image2/more.png" alt="more icon" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className='w-full h-[300px]'>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Summary */}
      <div className='flex justify-center gap-16 mt-4'>
        <div className='text-center'>
          <div className='w-5 h-5 mb-1' style={{ backgroundColor: '#F1C40F' }}></div>
          <h1>567</h1>
          <h2 className='text-xs text-gray-400'>Boys (55%)</h2>
        </div>
        <div className='text-center'>
          <div className='w-5 h-5 mb-1' style={{ backgroundColor: '#3498DB' }}></div>
          <h1>567</h1>
          <h2 className='text-xs text-gray-400'>Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
