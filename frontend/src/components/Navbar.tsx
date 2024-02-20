import { MessageSquareText, Rocket, Search, Twitter } from "lucide-react";
import profileImg from "./../assets/batman.jpg";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
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
        <div className="w-10 h-10 hover:shadow-lg rounded-full transition-all duration-300 cursor-pointer">
          <img
            src={profileImg}
            alt=""
            className="rounded-full hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
