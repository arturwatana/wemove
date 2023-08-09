import Image from "next/image";
import HomeItem from "./HomeItem";

export default function HomeItems() {
  return (
    <div className="px-10 grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-[39px] gap-y-[23px]">
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />
    </div>
  );
}
