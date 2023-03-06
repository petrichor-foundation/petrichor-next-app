import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import petrichorLogo from '../../public/images/petrichor-logo.svg'
import petrichorLogoName from '../../public/images/petrichor-logo-name.svg'

export function Footer() {
  return (
    <footer className="bg-white-light w-full px-[194px] py-[50px] flex flex-col items-center justify-center gap-14">
      <div className="w-full grid grid-cols-6">
        <div className="flex items-start justify-center gap-[10px]" >
          <Image src={petrichorLogo} alt="Petrichor Logo" />
          <Image src={petrichorLogoName} alt="Petrichor Logo Name" />
        </div>
        <nav className="footer-nav" >
          <h4 className="footer-nav-title">Sobre nós</h4>
          <p className="footer-nav-link">Omnis</p>
          <p className="footer-nav-link">Libero</p>
          <p className="footer-nav-link">Nam</p> 
        </nav>
        <nav className="footer-nav" >
          <h4 className="footer-nav-title">Resources</h4>
          <p className="footer-nav-link">Aslias</p>
          <p className="footer-nav-link">Aprus de</p>
          <p className="footer-nav-link">Craigus</p> 
          <p className="footer-nav-link">Sentus Met</p>
        </nav>
        <nav className="footer-nav" >
          <h4 className="footer-nav-title">Enterprise </h4>
          <p className="footer-nav-link">Lorem</p>
          <p className="footer-nav-link">Consectetur</p>
          <p className="footer-nav-link">Ipsum</p>
          <p className="footer-nav-link">Dolor Sit</p>
          <p className="footer-nav-link">Ammet</p>
        </nav>
        <nav className="footer-nav" >
          <h4 className="footer-nav-title">Company</h4>
          <p className="footer-nav-link">Otarch</p>
          <p className="footer-nav-link">Con metch</p>
          <p className="footer-nav-link">Eiusmod</p>
          <p className="footer-nav-link">Occaecat</p>
          <p className="footer-nav-link">Explicabo</p>
          <p className="footer-nav-link">Voluptas</p>
        </nav>
        <nav className="footer-nav" >
          <h4 className="footer-nav-title">Legal</h4>
          <p className="footer-nav-link">Cupidatat</p>
          <p className="footer-nav-link">Aliquam</p>
          <p className="footer-nav-link">Loboriosam</p>
          <p className="footer-nav-link">Consequatur</p>
          <p className="footer-nav-link">Illum</p>
          <p className="footer-nav-link">Distinctio</p>
          <p className="footer-nav-link">Assumenda</p>
        </nav>
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="text-xs font-normal text-gray">Copyright &copy; 2022 Petrichor Inc. All rights reserved.</span>

        <div className="flex items-center justify-center gap-9 text-gray">
          <Link href='#' >
            <FaGithub />
          </Link>
          <Link href='#' >
            <FaTwitter />
          </Link>
          <Link href='#' >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  )
}