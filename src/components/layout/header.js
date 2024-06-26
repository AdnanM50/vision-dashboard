'use client';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="shadow p-4 flex justify-between items-center">
    <div className="flex">
      <button className="md:hidden" onClick={() => setSidebarOpen(prev => !prev)}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg> */}
        <GiHamburgerMenu size={20} color="blue"/>

      </button>
      <h2 className="text-2xl font-semibold ml-4">Dashboard</h2>
    </div>
    <div className="flex items-center space-x-4">
      <button className="text-gray-600 hover:text-gray-800">Profile</button>
      <button className="text-gray-600 hover:text-gray-800">Logout</button>
    </div>
  </header>
  );
};

export default Header;
