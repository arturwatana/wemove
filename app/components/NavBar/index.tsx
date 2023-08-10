"use client";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavBar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full h-[58px] bg-primaryBlue flex items-center py-2 justify-around fixed z-50">
      <BsCart4 className="text-[25px]" />
      <h1 className="text-[22px] text-white font-light">WeMove</h1>
      <GiHamburgerMenu
        className="text-[23px]"
        onClick={() => setBurgerIsOpen((prev) => !prev)}
      />
      {burgerIsOpen ? (
        <ul className="absolute right-1 top-full flex flex-col p-4 justify-around items-center gap-4 bg-primary-blue rounded-[20px 0 20px 0] opacity-1 text-white bg-primaryBlue animate-burgerOpen z-50">
          <li>Inicio</li>
          <li>Categorias</li>
          <li>Login</li>
        </ul>
      ) : null}
    </nav>
  );
}
