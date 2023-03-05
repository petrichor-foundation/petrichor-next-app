import Link from "next/link";
import { ReactNode } from "react";

interface SocialMediaButtons {
  children: ReactNode,
  link: string,
}

export function SocialMediaButtons({ children, link }: SocialMediaButtons) {
  return(
    <Link href={link} className="w-8 h-8 rounded-full bg-blue-light flex items-center justify-center" >
      {children}
    </Link>
  )
}