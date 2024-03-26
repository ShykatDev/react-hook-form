// import { FaTrash } from "react-icons/fa6";
// import preview from "../assets/download.jpg";
import upload from "../assets/upload.webp";

const Form = () => {
  return (
    <form className="w-full lg:w-[65%] bg-neutral-950 p-10 rounded-xl border border-neutral-800">
      <div className="mb-6">
        <label htmlFor="" className="text-light">
          Project Image
        </label>
        <div className="mt-2 w-full h-48 border border-darkLight rounded-lg flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={upload} alt="upload" width={40} />
            <p className="text-sm text-light">Upload Image</p>
          </div>
        </div>

        {/* <div className="w-full border border-darkLight rounded-lg p-6 mt-2 flex justify-center items-center relative">
              <img src={preview} alt="" width={300} className="rounded-lg" />
              <div className="absolute top-6 right-6 flex gap-3 items-center">
                <button>
                  <FaRegEdit className="text-light duration-200 hover:text-white" />
                </button>
                <button>
                  <FaTrash className="text-light duration-200 hover:text-red-500" />
                </button>
              </div>
            </div> */}
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="" className="text-light">
          Project Name
        </label>
        <input type="text" name="" id="" className="input-field" />
        <i className="text-red-500 text-sm">Full name is required</i>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="" className="text-light">
          Project Description
        </label>
        <textarea rows={3} name="" id="" className="input-field" />
      </div>

      {/* <div className="mb-3 flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2 flex flex-col gap-2 mb-6">
            <label htmlFor="" className="text-light">
              Social
            </label>
            <input type="text" name="" id="" className="input-field" />
          </div>
          <div className="w-1/2 flex flex-col gap-2 mb-6">
            <label htmlFor="" className="text-light">
              Link
            </label>
            <input type="text" name="" id="" className="input-field" />
          </div>
          <button>
            <FaTrash className="text-light duration-200 hover:text-red-500" />
          </button>
        </div>
      </div> */}

      <div className="mb-10">
        <button className="w-full bg-neutral-500 bg-opacity-10 text-light border border-light px-6 py-1.5 rounded-lg font-medium">
          Add Social Handles
        </button>
      </div>

      <button className="w-full  py-1.5 rounded-lg bg-white text-black">
        Save
      </button>
    </form>
  );
};

export default Form;
