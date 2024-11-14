import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";
import { RiMenu2Fill } from "react-icons/ri";

const Dashboard = () => {
  const [showmenu, setshowmenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (showmenu) {
      setshowmenu(false);
    }
  }, [location.pathname]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth >= 768
  );
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (authLoading || profileLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div className="relative flex md:flex-row flex-col gap-2 md:gap-0 w-screen">
      <div
        className="sm:hidden md:w-[17%]"
        style={{ display: isSidebarVisible ? "block " : "none" }}
      >
        <Sidebar />
      </div>
      <div
        onClick={() => setshowmenu(!showmenu)}
        className=" mt-3 ml-3 text-white lg:hidden block"
      >
        <RiMenu2Fill size={25} />
      </div>
      <div
        className={` transition-all duration-500 md:hidden ${
          showmenu ? "w-[100vw] h-[100vh]" : "w-0"
        }   overflow-hidden absolute top-[6rem] z-50 left-0 bg-richblack-900 bottom-0`}
      >
        <Sidebar />
      </div>
      <div className=" w-[100%]  md:w-[80%] md:ml-4 md:mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
