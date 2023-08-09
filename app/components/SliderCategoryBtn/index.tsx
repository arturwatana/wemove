import { useContext } from "react";
import { ContextProvider } from "../SliderCategories";
type SliderCategoryBtnProps = {
  name: string;
};

export default function SliderCategoryBtn({ name }: SliderCategoryBtnProps) {
  const { selected, setSelected } = useContext(ContextProvider);

  return (
    <button
      value={name}
      className={` w-[83px] h-[19px] rounded-full px-[8px] text-[12px] text-center ${
        selected === name ? "bg-primaryBlue" : "bg-slate-500"
      }`}
      onClick={() => setSelected(name)}
    >
      {name}
    </button>
  );
}
