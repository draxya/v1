import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-center sticky p-5 top-0 backdrop-blur-lg">
      <div className="flex md:w-7/12 w-10/12 justify-between">
        <div className="flex items-center">
          <p className="text-2xl font-bold text-gray-200">
            draxya.
          </p>
        </div>
        <div className="flex items-center text-gray-300">
          <a href="" className="mr-3">
            Projects
          </a>
          <a href="mailto:contactdraxya@gmail.com" className="px-5 p-2 rounded-full bg-[#1f1f1f]">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
