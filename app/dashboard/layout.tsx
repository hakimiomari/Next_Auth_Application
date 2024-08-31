import React from "react";
import SideBar from "./sidebar/page";

const DashboardLayout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="flex w-100">
      <div className="w-[260px] h-screen">
        <SideBar />
      </div>
      <div className="mx-12 px-10 py-4 h-screen w-full ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
