"use client";

import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {/* TOP */}
      <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
        <div>logo</div>
        <h1 className='font-extrabold text-2xl'>ESTOCK</h1>
        <button
          className='md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={() => {}}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>

      {/* LINKS */}
      <div className='flex grow mt-8'>{/* links here */}</div>

      {/* FOOTER */}
      <div>
        <div>
          <p className='text-center text-xs text-gray-500'>
            &copy; {new Date().getFullYear()} ESTOCK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
