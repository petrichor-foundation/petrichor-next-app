import { FaAngleRight } from "react-icons/fa"

interface SendProjectButtonProps {
  title: string
}

export function SendProjectButton({ title }: SendProjectButtonProps) {
  // &#62; is reserved to > 
  return(
    <button className="mt-4 w-[180px] bg-gray-dark rounded-xl py-[10px]" >
      <span className="text-white text-sm font-normal leading-6 flex items-center justify-center">
        {title}
        <FaAngleRight className="text-xs"/>
      </span>
    </button>
  )
}