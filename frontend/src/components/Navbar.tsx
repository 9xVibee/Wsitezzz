import {
  Handshake,
  HelpCircle,
  LogOut,
  MessageSquareMore,
  MessageSquareText,
  Rocket,
  Search,
  Twitter,
  User,
} from "lucide-react";
import profileImg from "./../assets/batman.jpg";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full justify-between px-4 sm:px-6 md:px-8 py-2 glassMorphisom fixed top-0 left-0 z-10">
      <Link to={"/"}>
        <h1 className="text-5xl font-zyada font-extrabold overflow-y-hidden">
          W.
        </h1>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        {/* feedback */}
        <p className="hidden items-center text-[1.1rem] gap-1 bg-gray-200 px-2 rounded-xl cursor-pointer sm:flex">
          Feedback <MessageSquareText className="size-5 mt-1" />
        </p>

        {/* Tweets */}
        <TooltipProvider>
          <Tooltip delayDuration={1}>
            <TooltipTrigger>
              <Link to={"/tweets"} className="sm:block hidden">
                <p className="hover:bg-gray-200 cursor-pointer py-2 px-2 rounded-full transition-colors duration-300">
                  <Twitter />
                </p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Share Tweet</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Submit Website */}
        <TooltipProvider>
          <Tooltip delayDuration={1}>
            <TooltipTrigger>
              <Link to={"/submit-website"}>
                <p className="hover:bg-gray-200 cursor-pointer py-2 px-2 rounded-full transition-colors duration-300">
                  <Rocket />
                </p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Submit Website</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Search */}
        <TooltipProvider>
          <Tooltip delayDuration={1}>
            <TooltipTrigger>
              <Link to={"/search"}>
                <p className="hover:bg-gray-200 cursor-pointer py-2 px-2 rounded-full transition-colors duration-300">
                  <Search />
                </p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Search</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Profile */}
        <div
          className="w-10 h-10 hover:shadow-lg rounded-full transition-all duration-300 cursor-pointer"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img
            src={profileImg}
            alt=""
            className="rounded-full hover:shadow-lg"
          />
        </div>

        {/* DropDown */}
        {isOpen && (
          <div className="w-[16rem] rounded-md flex flex-col shadow-lg h-fit bg-white absolute top-[3.2rem] right-6 sm:right-8 md:right-10 border py-1 px-2">
            <Link
              to={"/profile/:username"}
              className="w-full flex transition-colors duration-300 items-center text-[1rem] cursor-pointer gap-2 px-2 rounded-md hover:bg-gray-100 py-2"
            >
              <User className="size-[1.1rem]" /> Profile
            </Link>
            <Link
              to={"/tweets"}
              className="flex sm:hidden w-full transition-colors duration-300 items-center text-[1rem] cursor-pointer gap-2 px-2 rounded-md hover:bg-gray-100 py-2"
            >
              <Twitter className="size-[1.1rem]" /> Share Tweet
            </Link>
            <Link
              to={"/feedback"}
              className="sm:hidden flex w-full transition-colors duration-300 items-center text-[1rem] cursor-pointer gap-2 px-2 rounded-md hover:bg-gray-100 py-2"
            >
              <MessageSquareText className="size-[1.1rem]" /> Feedback
            </Link>
            <Link
              to={"/faq"}
              className="w-full flex transition-colors duration-300 items-center text-[1rem]  cursor-pointer gap-2 px-2 hover:bg-gray-100 py-2"
            >
              <HelpCircle className="size-[1.1rem]" /> FAQs
            </Link>
            <Link
              to={"/bussiness"}
              className="w-full flex transition-colors duration-300 items-center text-[1rem]  cursor-pointer gap-2 px-2 hover:bg-gray-100 py-2"
            >
              <Handshake className="size-[1.1rem]" /> Bussiness Enquiry
            </Link>
            <Link
              to={"/discord"}
              className="w-full flex transition-colors duration-300 items-center text-[1rem]  cursor-pointer gap-2 px-2 hover:bg-gray-100 py-2"
            >
              <MessageSquareMore className="size-[1.1rem] mt-1" /> Discord
            </Link>
            <Link
              to={"/bussiness"}
              className="w-full flex transition-colors duration-300 items-center text-[1rem]  cursor-pointer gap-2 px-2 hover:bg-gray-100 py-2"
            >
              <LogOut className="size-[1.1rem]" /> Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
