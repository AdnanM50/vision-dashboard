"use client";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { IoHelpOutline } from "react-icons/io5";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);
  return (
    <>
      <div
        className={`bg-[url('/images/side.png')] bg-no-repeat bg-cover mt-2 text-white w-[250px] min-h-screen p-[22px] fixed z-20 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-sm text-center tracking-wide font-bold mb-6 uppercase">
          vision ui free
        </h1>
        <ul className="space-y-3">
          <li className="flex justify-start items-center text-xl gap-3 py-2 bg-bghover rounded-2xl px-4">
            <span className="p-2 bg-bgicon rounded-xl">
              <FaHome size={21} color="white" />
            </span>
            <a href="#" className="hover:text-gray-400">
              Dashboard
            </a>
          </li>
          <li className="flex justify-start items-center text-xl gap-3 py-2 bg-bghover rounded-2xl px-4">
            <span className="p-2 bg-bgicon rounded-xl">
              <FaHome size={21} color="white" />
            </span>
            <a href="#" className="hover:text-gray-400">
              Users
            </a>
          </li>
          <li className="flex justify-start items-center text-xl gap-3 py-2 bg-bghover rounded-2xl px-4">
            <span className="p-2 bg-bgicon rounded-xl">
              <FaHome size={21} color="white" />
            </span>
            <a href="#" className="hover:text-gray-400">
              Products
            </a>
          </li>
          <li className="flex justify-start items-center text-xl gap-3 py-2 bg-bghover rounded-2xl px-4">
            <span className="p-2 bg-bgicon rounded-xl">
              <FaHome size={21} color="white" />
            </span>
            <a href="#" className="hover:text-gray-400">
              Orders
            </a>
          </li>
        </ul>
        <div className="bg-[url('/images/Background.png')] bg-no-repeat bg-cover p-4 rounded-xl w-full absolute bottom-4 left-0">
          <li className="bg-white p-2 rounded-xl">
            <span className="bg-bgicon">
              <IoHelpOutline />
            </span>
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
