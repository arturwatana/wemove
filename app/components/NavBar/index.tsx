import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <nav className="w-full h-[58px] bg-primaryBlue flex items-center py-2 justify-around">
      <BsCart4 className="text-[25px]" />
      <h1 className="text-[22px] text-white font-light">WeMove</h1>
      <GiHamburgerMenu className="text-[23px]" />
    </nav>
  );
}
