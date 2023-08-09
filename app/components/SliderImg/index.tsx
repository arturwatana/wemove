"use client";
import Image from "next/image";
import Runner from "../../assets/Runner.png";
import Runner1 from "../../assets/Runner1.png";
import { useState } from "react";

export default function SliderImg() {
  return (
    <div id="carousel-wrapper" className=" ">
      <div
        className={`w-full h-[214px] px-10  grid grid-flow-col auto-cols-auto overflow-x-auto  gap-2 `}
      >
        <div className=" w-[310px] h-[214px] ">
          <Image src={Runner} alt="" className="w-full h-full rounded-[20px]" />
        </div>
        <div className=" w-[310px] h-[214px] ">
          <Image
            src={Runner1}
            alt=""
            className="w-full h-full rounded-[20px]"
          />
        </div>
        <div className=" w-[310px] h-[214px] ">
          <Image
            src={Runner1}
            alt=""
            className="w-full h-full rounded-[20px]"
          />
        </div>
        <div className=" w-[310px] h-[214px] ">
          <Image
            src={Runner1}
            alt=""
            className="w-full h-full rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
