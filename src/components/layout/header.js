const Header = () => {
    return (
      <header className=" shadow p-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">Profile</button>
          <button className="text-gray-600 hover:text-gray-800">Logout</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  