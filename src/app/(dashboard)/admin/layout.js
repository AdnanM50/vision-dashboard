"use client";

import Sidebar from "@/components/layout/sideber";
import "../../globals.css";
import metadata from "./metadata";
import Header from "@/components/layout/header";

import { useState } from "react";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-[url('/images/bg.png')] bg-blue-950 bg-no-repeat bg-cover px-1">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main
            className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
              sidebarOpen ? "ml-64" : "ml-0"
            }`}
          >
            <Header setSidebarOpen={setSidebarOpen} />
            <div className="p-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
