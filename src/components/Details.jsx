import hookForm from "../assets/react-hook-form-logo-only.png";
import { FaGithub } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";

const Details = () => {
  return (
    <div className=" lg:w-[30%]">
      <div className="bg-neutral-900 border border-neutral-800 py-10 text-center rounded-lg">
        <div className="text-xl flex justify-center gap-2">
          <img src={hookForm} alt="hook-form" width={30} />
          <p className="text-neutral-200 font-medium">React Hook Form</p>
        </div>
      </div>
      <div className="mt-10 py-5 mb-3 border-b border-neutral-600">
        <p>Git Repository</p>
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <FaGithub />
            <p className="text-neutral-200">ShykatDev/hookForm</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaCodeBranch />
            <p>main</p>
          </div>
        </div>
      </div>

      <div>
        <p className="py-3">
          Feel free to download the source code and practice as per your need.
        </p>
      </div>
    </div>
  );
};

export default Details;
