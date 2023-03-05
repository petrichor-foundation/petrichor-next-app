import { FaGithub } from 'react-icons/fa'

interface SignInButtonProps {
  title: string,
  hasIcon?: boolean, 
}

export function SignInButton({ title, hasIcon }: SignInButtonProps) {
  return(
    <>
      {hasIcon ? (
        <button className='flex items-center justify-center gap-2 w-[180px] py-[10px] bg-blue-light rounded-xl'>
          <FaGithub className='text-blue text-lg ' />
          <span className='text-blue text-sm font-medium' >{title}</span>
        </button>
      ) : (
        <button className='flex items-center justify-center gap-2 w-[180px] py-[10px] bg-blue-light rounded-xl'>
          <span className='text-blue text-sm font-medium' >{title}</span>
        </button>
      )}
    </>
  )
}