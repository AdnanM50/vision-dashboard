import '../../globals.css';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sideber';
const Layout = ({ children }) => {
  

  return (

    <html lang="en">
    <body >
      <div className="flex min-h-screen bg-[url('/images/bg.png')] bg-blue-950 bg-no-repeat	bg-cover">
        <Sidebar />
        <main className="flex-1 flex flex-col ">
          <Header />
          <div className="p-4">{children}</div>         
        </main>
      </div>
      </body>
  </html>

  );
};

export default Layout;
