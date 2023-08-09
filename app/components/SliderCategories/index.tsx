"use client";
import { useState, createContext } from "react";
import SliderCategoryBtn from "../SliderCategoryBtn";
export type ContextProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const ContextProvider = createContext<ContextProps>({
  selected: "Running",
  setSelected: () => {},
});
export default function SliderCategories() {
  const [selected, setSelected] = useState<string>("Running");
  const contextValues = {
    selected,
    setSelected,
  };

  return (
    <ContextProvider.Provider value={contextValues}>
      <div className="">
        <div className="px-10 grid grid-flow-col auto-cols-auto overflow-x-auto  gap-4">
          <SliderCategoryBtn name="Running" />
          <SliderCategoryBtn name="Esportes" />
          <SliderCategoryBtn name="Masculino" />
          <SliderCategoryBtn name="Feminino" />
          <SliderCategoryBtn name="Social" />
        </div>
      </div>
    </ContextProvider.Provider>
  );
}
