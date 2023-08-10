"use client";
import HomeItem from "./HomeItem";
import { useState } from "react";
export default function HomeItems() {
  const [showMoreItens, setShowMoreItens] = useState<boolean>(false);
  const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="flex flex-col gap-[23px]">
      <div className={`px-9 flex flex-wrap gap-x-[25px] gap-y-[13px]  w-full`}>
        {itens.map((item, index) => {
          if (!showMoreItens && index < 6) {
            return;
          }
          return <HomeItem key={item} />;
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          className="bg-primaryBlue w-[83px] h-[19px] rounded-full px-[8px] text-[12px] text-center"
          onClick={() => setShowMoreItens((prev) => !prev)}
        >
          {!showMoreItens ? "Ver mais" : "Ver Menos"}
        </button>
      </div>
    </div>
  );
}
