import Image from "next/image";
import petrichorLogo from '../../public/images/petrichor-logo.png'
import { SignInButton } from "../SignInButton";

export function Navbar() {
  return(
    <div className="bg-white-bg top-[30px] left-[76px] right-[76px] h-[53px] fixed z-20 p-4 shadow-emphasis rounded-2xl flex justify-between items-center">
      <div>
        <Image src={petrichorLogo} alt="Petrichor logo" />
      </div>
      <div className="flex items-center justify-center gap-12">
        <ul className="flex gap-12 text-sm font-normal">
          <li>Sobre nós</li>
          <li>Ranking</li>
          <li>Comunidade</li>
          <li>Empresa</li>
        </ul>
        <SignInButton title="Login com Github" hasIcon />
      </div>
    </div>
  )
}