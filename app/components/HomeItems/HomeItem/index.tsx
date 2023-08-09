import Image from "next/image";
import AdidasTenis from "../../../assets/adidasTenis.png";

export default function HomeItem() {
  return (
    <div className="flex flex-col">
      <div className="h-[116.52px] w-[136px] ">
        <Image
          src={AdidasTenis}
          alt=""
          className="h-full w-full  rounded-[25px]"
        />
      </div>
      <h3 className="text-[13px] mt-[4px] w-full text-center">Adidas showme</h3>
      <p className="line-through mt-[2px] text-gray-400 text-[8px]">R$399,99</p>
      <p className="text-[11px] font-medium">R$249,99</p>
    </div>
  );
}
