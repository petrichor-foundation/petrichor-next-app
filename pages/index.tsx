import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { SendProjectButton } from "../components/SendProjectButton";
import { SocialMediaButtons } from "../components/SocialMediaButtons";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import backImage from '../public/images/back-image.svg'
import typeProject from '../public/images/type-project.png'

import bradesco from '../public/images/bradesco.png'
import napice from '../public/images/napice.png'
import marketdata from '../public/images/marketdata.png'

import { ProjectTypes } from "../components/ProjectTypes";
import { SignInButton } from "../components/SignInButton";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Petrichor | Home</title>
      </Head>

      <Navbar />
      <div className="main-container">
        <div className="relative flex items-center justify-center w-full" >
          <Image src={backImage} alt='Back Image' />
          <div className="absolute top-1/4 flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-6xl font-bold tracking-tighter">Premiando você pelo</h1>
            <h1 className="text-center text-6xl font-bold tracking-tighter">seu melhor código</h1>
            <p className="text-center text-base font-normal text-gray">Recompensando os desenvolvedores brasileiros mais <br /> talentosos e seus projetos de destaque.</p>
            <SendProjectButton title="Envie seu projeto" />
            <div className="mt-6 flex items-center justify-center gap-4" >
              <SocialMediaButtons link="https://github.com/petrichor-foundation" >
                <FaGithub className="text-blue text-base" />
              </SocialMediaButtons>
              <SocialMediaButtons link="https://twitter.com/PetrichorFou" >
                <FaTwitter className="text-blue text-base" />
              </SocialMediaButtons>
              <SocialMediaButtons link="https://www.linkedin.com/company/petrichor-foundation/" >
                <FaLinkedin className="text-blue text-base" />
              </SocialMediaButtons>
            </div>
          </div>
        </div>

        <section className="mb-[250px] flex flex-col items-center justify-center gap-6">
          <h2 className="text-5xl font-bold tracking-tighter">Apoiando Open-source</h2>
          <p className="max-w-[770px] text-center text-gray">
            Projetos de código aberto, mantidos por programadore voluntários, fazem a internet moderna funcionar.
            Apoiar esse trabalho essencial, e as pessoas por trás dele, é o que fazemos.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-3 h-[35px] px-5 bg-gray-dark rounded-lg">
              <FaGithub className="text-white text-base" />
              <span className="text-white text-sm font-medium " >Stars</span>
            </div>
            <div className="pointed-balloon">
              4,650
              <span className="pointed" aria-hidden='true'></span>
            </div>
          </div>
        </section>

        <section className="mb-[140px] flex flex-col items-center justify-center gap-6">
          <h2 className="text-5xl font-bold tracking-tighter">Envie seu projeto 🎉</h2>
          <p className="max-w-[500px] text-center text-gray">
            Ao enviar seu projeto você terá benefícios exclusivos e se ele cumprir todos os <span className="text-blue" >requisitos</span>,
            você receberá um presente surpresa.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-[18px]" >
            <ProjectTypes title="Type of projects" description="Create teams and organize your files in folders and projects." >
              <Image src={typeProject} alt="Image of project type" />
            </ProjectTypes>
            <ProjectTypes title="Type of projects" description="Create teams and organize your files in folders and projects." >
              <Image src={typeProject} alt="Image of project type" />
            </ProjectTypes>
            <ProjectTypes title="Type of projects" description="Create teams and organize your files in folders and projects." >
              <Image src={typeProject} alt="Image of project type" />
            </ProjectTypes>

            <ProjectTypes title="Type of projects" description="Create teams and organize your files in folders and projects." >
              <Image src={typeProject} alt="Image of project type" />
            </ProjectTypes>
            <ProjectTypes title="Type of projects" description="Create teams and organize your files in folders and projects." >
              <Image src={typeProject} alt="Image of project type" />
            </ProjectTypes>
            <ProjectTypes title="Type of projects" description="Create teams and organize your files in folders and projects." >
              <Image src={typeProject} alt="Image of project type" />
            </ProjectTypes>
          </div>
        </section>

        <section className="mb-[110px] flex flex-col items-center justify-center gap-8">
          <p className="text-base font-normal text-gray" >Equipes em empresas globais confiam na gente.</p>
          <div className="grid grid-cols-3 gap-[100px]">
            <Image src={bradesco} alt="Bradesco company logo" />
            <Image src={marketdata} alt="MarketData company logo" />
            <Image src={napice} alt="Napice company logo" />
          </div>
        </section>

        <section className="mb-[110px] flex flex-col items-center justify-center gap-12" >
          <div className="flex flex-col items-center justify-center gap-4" >
            <h3 className="text-[22px] font-bold">Seja Premiado</h3>
            <p className="text-base font-normal text-gray max-w-[450px] text-center">Aceitamos projetos de tipos diversos, leia a <span className="text-blue">documentação</span> e veja se o seu cumpre os requisitos.</p>
          </div>
          <SignInButton title="Aplique agora" />
        </section>
      </div>

      <Footer />
    </>
  )
}