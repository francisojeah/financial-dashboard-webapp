import { ReactNode } from "react";
import AuthNavBar from "./AuthNavBar";
import SideMenu from "./SideMenu";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <div
        className="transform translate-x-[-1000%] lg:transform-none fixed min-h-screen w-[15.625rem] z-20 transition-transform duration-300 overflow-y-visible bg-white border-r-[1px] border-[#DFEAF2]"
        id="side-menu"
      >
        <SideMenu />
      </div>
      <div className="flex flex-col w-full lg:w-[calc(100%-15.625rem)] min-h-screen bg-white md:bg-custom-primary-3 overflow-x-auto ml-0 lg:ml-[15.625rem] pb-8">
        <AuthNavBar />
        <div className="mt-[10rem] lg:mt-[6.25rem] p-4 lg:p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
