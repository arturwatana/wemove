type SliderCategoryBtnProps = {
  name: string;
};

export default function SliderCategoryBtn({ name }: SliderCategoryBtnProps) {
  return (
    <button
      value={name}
      className="bg-slate-500 w-[83px] h-[19px] rounded-full px-[8px] text-[12px] text-center"
    >
      {name}
    </button>
  );
}
