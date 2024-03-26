import { RiHome2Line } from "react-icons/ri";
import ytlogo from "../assets/youtube.png";

const Header = () => {
  return (
    <div className="bg-black border-b border-neutral-700 bg-opacity-75 pt-32 py-52">
      <div className="container relative">
        <div>
          <p className="flex items-center gap-1">
            <RiHome2Line /> Home
          </p>
          <h2 className="text-4xl text-neutral-300 font-medium mb-2 mt-3">
            Upload your next dream project.
          </h2>
          <p>Fill the form with correct details and add to your portfolio.</p>
        </div>

        <div className="absolute right-[3rem] -top-24">
          <div className="flex items-center gap-2">
            <img src={ytlogo} alt="yt-logo" width={20} />
            <p className="font-medium text-neutral-200 text-sm">@WebSimp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
