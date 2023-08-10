import HomeItems from "./components/HomeItems";
import SliderCategories from "./components/SliderCategories";
import SliderImg from "./components/SliderImg";

export default function Home() {
  return (
    <main className="w-full h-full py-[33px] pt-[91px] flex flex-col justify-center  ">
      <SliderImg />
      <div className="mt-[27px] flex flex-col gap-[23px] justify-center ">
        <h1 className=" px-10 text-lg ">Categorias:</h1>
        <SliderCategories />
        <HomeItems />
      </div>
    </main>
  );
}
