import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className=" absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  "></div>
      </div>

      <div className="container mx-auto px-8 ">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default MainLayout;
