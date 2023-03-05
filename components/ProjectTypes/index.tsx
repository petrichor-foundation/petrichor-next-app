import { ReactNode } from "react";

interface ProjectTypesProps {
  children: ReactNode,
  title: string,
  description: string,
}

export function ProjectTypes({ children, title, description }: ProjectTypesProps) {
  return (
    <main className="w-[260px] h-[170px] bg-white-light shadow-sm rounded-xl px-8 py-6 flex flex-col gap-3" >
      {children}

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold" >{title}</h3>
        <p className="text-xs font-normal text-gray" >{description}</p>
      </div>
    </main>
  )
}