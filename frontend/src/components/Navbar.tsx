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
    <div className="flex justify-between px-8 py-2">
      <h1 className="text-5xl font-zyada font-extrabold">W.</h1>
      <div className="flex items-center gap-4">
        {/* feedback */}
        <p className="flex items-center text-[1.1rem] gap-1 bg-gray-200 px-2 rounded-xl cursor-pointer">
          Feedback <MessageSquareText className="size-5 mt-1" />
        </p>

        {/* Tweets */}
        <TooltipProvider>
          <Tooltip delayDuration={1}>
            <TooltipTrigger>
              <Link to={"/search"}>
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
              <Link to={"/search"}>
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
