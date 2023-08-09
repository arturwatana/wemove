import SliderCategoryBtn from "../SliderCategoryBtn";

export default function SliderCategories() {
  return (
    <div className="">
      <div className="px-10 grid grid-flow-col auto-cols-auto overflow-x-auto  gap-4">
        <SliderCategoryBtn name="Running" />
        <SliderCategoryBtn name="Esportes" />
        <SliderCategoryBtn name="Masculino" />
        <SliderCategoryBtn name="Feminino" />
        <SliderCategoryBtn name="Running" />
      </div>
    </div>
  );
}
