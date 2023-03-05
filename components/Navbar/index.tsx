import Image from "next/image";
import petrichorLogo from '../../public/images/petrichor-logo.png'
import { SignInButton } from "../SignInButton";

export function Navbar() {
  return(
    <header className="backdrop-blur-md bg-white-bg-glass top-[30px] left-[76px] right-[76px] h-[53px] fixed z-20 p-[10px] shadow-emphasis rounded-2xl flex justify-between items-center">
      <div>
        <Image src={petrichorLogo} alt="Petrichor logo" />
      </div>
      <div className="flex items-center justify-center gap-12">
        <ul className="flex gap-12 text-sm font-normal">
          <li className="cursor-pointer">Sobre nós</li>
          <li className="cursor-pointer">Ranking</li>
          <li className="cursor-pointer">Comunidade</li>
          <li className="cursor-pointer">Empresa</li>
        </ul>
        <SignInButton title="Login com Github" hasIcon />
      </div>
    </header>
  )
}