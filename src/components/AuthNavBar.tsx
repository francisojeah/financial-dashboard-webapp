import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { menus } from "./SideMenu";

const AuthNavBar = () => {
  const activeSideMenu = useSelector<RootState>((state) => state.menu);

  const { menu }: any = activeSideMenu;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
  };

  const closeDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const currentTitle = menus[menu]?.title || "";

  return (
    <div className="px-4 lg:px-8 w-full lg:w-[calc(100%-15.625rem)] bg-white lg:border-b-[1px] border-[#DFEAF2] z-10 top-0 fixed">
      <div className="h-[6.25rem] hidden lg:flex justify-between items-center">
        <div className="font-semibold text-[1.75rem] text-custom-primary-1 leading-8">
          {currentTitle === "Dashboard" ? "Overview" : currentTitle}
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="relative w-full md:w-[15.9375rem]">
            <div className="absolute inset-y-0 left-0 pr-2 sm:pr-6 pl-4 flex items-center">
              <img
                src="/assets/icons/search-icon.svg"
                alt="search icon"
                className="w-auto h-5"
              />
            </div>
            <input
              className="px-4 py-4 w-full h-12 pl-12 flex shadow-none text-sm bg-custom-primary-3 rounded-full self-stretch gap-2 items-center focus:outline-none text-[#8BA3CB]"
              placeholder="Search for something"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center bg-custom-primary-3 rounded-full w-[3.125rem] h-[3.125rem]">
            <img src="/assets/icons/settings1-icon.svg" alt="Notification" />
          </div>
          <div className="flex justify-center items-center bg-custom-primary-3 rounded-full w-[3.125rem] h-[3.125rem]">
            <img src="/assets/icons/notification-icon.svg" alt="Notification" />
          </div>
          <img
            src="/assets/images/profile.png"
            alt="User Profile"
            className="w-[3.75rem] h-[3.75rem] rounded-full"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="h-[10rem] py-6 flex flex-col lg:hidden w-full gap-6">
        <div className="flex items-center justify-between w-full">
          <div className="relative flex items-center" ref={dropdownRef}>
            <div
              className="flex gap-2 w-[2.1875rem] h-[2.1875rem] text-[#343C6A] items-center md:gap-3 cursor-pointer"
              onClick={toggleDropdown}
            >
              <svg
                className="w-[0.875rem] h-[1.125rem]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute z-10 left-0 top-6 mt-2 w-48 bg-white shadow-md rounded-md">
                <div className="p-3 space-y-2">
                  {menus.map(({ title, link }, index) => (
                    <Link
                      key={index}
                      to={`/${link}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="font-semibold text-[1.25rem] text-custom-primary-1 leading-6">
            {currentTitle === "Dashboard" ? "Overview" : currentTitle}
          </div>

          <img
            src="/assets/images/profile.png"
            alt="User Profile"
            className="w-[2.1875rem] h-[2.1875rem] rounded-full"
          />
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="relative w-full md:w-[15.9375rem]">
            <div className="absolute inset-y-0 left-0 pr-2 sm:pr-6 pl-4 flex items-center">
              <img
                src="/assets/icons/search-icon.svg"
                alt="search icon"
                className="w-auto h-[0.9375rem]"
              />
            </div>
            <input
              className="px-4 py-4 w-full h-12 pl-12 flex shadow-none text-[0.8125rem] bg-custom-primary-3 rounded-full self-stretch gap-2 items-center focus:outline-none text-[#8BA3CB]"
              placeholder="Search for something"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthNavBar;
