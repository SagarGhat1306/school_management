import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  { name: 'Group A', value: 400, fill: '#ecf7fc' },
  { name: 'Group B', value: 100, fill: '#fff313' },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-md h-full w-full">

      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-semibold">Performance</h1>
        <Image src="/image2/more.png" alt="More" width={14} height={14} />
      </div>

      {/* Chart Container */}
      <div className="relative w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              label={false}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold">9.2</h1>
          <p className="text-xs text-gray-500">of 10 max LTS</p>
        </div>
        <h2 className='font-medium absolute bottom-10 left-20  ' >1 -semester  2-semester</h2>
      </div>
    </div>
  );
};

export default PerformanceChart;
