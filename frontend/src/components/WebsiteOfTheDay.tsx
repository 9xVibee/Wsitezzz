import { Link } from "react-router-dom";
import tempBannerImg from "./../assets/Screenshot (447).png";
import { ArrowUpRightFromCircle } from "lucide-react";

const WebsiteOfTheDay = () => {
  return (
    <div className="w-full mt-20 h-[100vh] flex justify-center items-center">
      <div className="group w-[95%] h-[95%] rounded-2xl border relative overflow-hidden">
        <Link to={"/website/website-id"}>
          <img
            src={tempBannerImg}
            alt=""
            className="scale-100 w-full h-full rounded-2xl object-cover group-hover:scale-110 transition-all duration-300"
          />
          <div className="w-full h-full rounded-2xl hover:opacity-100 opacity-0 transition-opacity duration-300 absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 flex justify-center items-center">
            <ArrowUpRightFromCircle className="size-8 text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteOfTheDay;
