import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { IoLogOut } from 'react-icons/io5';
import moment from 'moment';

export function Header() {
  const menu = useRef<any>();

  const getGreetingMessage = () => {
    const hour = new Date().getHours();

    if (hour >= 12) {
      if (hour >= 16) {
        return 'Good Evening !';
      } else {
        return 'Good Afternoon !';
      }
    } else {
      return 'Good Morning !';
    }
  };

  const onLogout = () => {
    window.location.href = './login';
    localStorage.clear();
  };

  const items = [
    {
      icon: <IoLogOut className="mr-2 w-5 h-5" />,
      label: 'Sign Out',
      className: 'text-sm',
      command: () => onLogout(),
    },
  ];

  return (
    <header className="flex px-3 h-14 items-center justify-between bg-gray-50">
      <div className="flex items-center">
        <img className="w-10 h-10 mr-4" />
        <h1 className="text-indigo-900 text-sm font-bold">
          Oh Taxi Administration
        </h1>
      </div>

      <div className="mr-5 flex items-center">
        <div className="w-36 h-11 text-indigo-600 tracking-widest text-sm font-bold rounded-sm mr-6 flex flex-col justify-center items-center">
          <span className="text-[11px]">
            {moment(new Date()).format('DD-MM-YYYY')}
          </span>{' '}
        </div>

        <div className="font-display font-bold text-xs flex-col text-gray-900 tracking-widest mr-4 md:block hidden">
          <span className="text-[12px]">{getGreetingMessage()}</span>
          <br />
          Administrator
        </div>

        <img
          className="h-8 w-8 rounded-full hover:border-[2px] hover:border-red-400"
          onClick={(e) => menu.current.toggle(e)}
        />

        <Menu model={items} popup ref={menu} />
      </div>
    </header>
  );
}
