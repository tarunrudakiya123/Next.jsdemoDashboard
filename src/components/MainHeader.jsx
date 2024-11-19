"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { CiBank } from "react-icons/ci";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 h-14">
        <div className="flex itmes-center justify-center">
          <CiBank className="text-4xl" />
          <h5 className="text-2xl">My Bank</h5>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div onClick={toggle} className="lg:hidden">
            <FaBars className="cursor-pointer" />
          </div>
          <div>User Area</div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
