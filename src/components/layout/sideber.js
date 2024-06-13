

const Sidebar = () => {
    return (
   
      <div className="bg-[url('/images/side.png')] bg-no-repeat bg-cover mt-2 text-white w-64 min-h-screen p-4 ">
        <h1 className="text-sm text-center tracking-wide font-bold mb-6 uppercase ">vision ui free</h1>
        <ul>
          <li className="mb-4"><a href="#" className="hover:text-gray-400">Dashboard</a></li>
          <li className="mb-4"><a href="#" className="hover:text-gray-400">Users</a></li>
          <li className="mb-4"><a href="#" className="hover:text-gray-400">Settings</a></li>
          <li className="mb-4"><a href="#" className="hover:text-gray-400">Logs</a></li>
        </ul>
        {/* <div className="bg-[url('/images/back')]"></div> */}
      </div>
   
   
    );
  };
  
  export default Sidebar;
  