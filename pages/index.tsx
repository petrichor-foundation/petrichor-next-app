import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

import backImage from '../public/images/back-image.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Petrichor | Home</title>
      </Head>

      <Navbar />
      <div className="main-container">
        <div className="relative flex items-center justify-center w-full bg-gray-dark" >
          <Image src={backImage} alt='Back Image' />
          {/* <div className="">
            <h1>Premiando você pelo seu melhor código</h1>
            <p>Recompensando os desenvolvedores brasileiros mais talentosos e seus projetos de destaque.</p>
          </div> */}
        </div>
      </div>
    </>
  )
}