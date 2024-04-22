import React from 'react';
import { RiHomeGearLine } from 'react-icons/ri';
import { IoCarSportSharp } from 'react-icons/io5';

export function SideBar() {
  const Columns = [
    {
      name: 'Home',
      icon: RiHomeGearLine,
      to: '/',
    },

    {
      name: 'Drivers',
      icon: IoCarSportSharp,
      to: '/',
    },
  ];
  return (
    <div
      className={` ${'w-72  '}   bg-gray-200 p-2 relative  duration-300 md:block hidden`}
      style={{ height: '100vh' }}
    >
      {Columns.map((item: any, key: any) => (
        <div key={key}>
          <div className="flex flex-col mt-4 cursor-pointer">
            <div
              className={`flex items-center p-[5px] px-3 font-medium rounded ${'bg-[#15616d]'}`}
            >
              <item.icon className={`mr-2 w-5 h-10  ${'text-white'}  `} />

              <span
                className={`ml-3 text-xs  'text-white'  tracking-widest font-semibold`}
              >
                Sample
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
