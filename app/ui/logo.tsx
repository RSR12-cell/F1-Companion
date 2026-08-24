import Link from 'next/link'
import Image from 'next/image'

export default function Logo(){
    return(
        <Link href={'/'} className="flex items-center justify-center gap-1.5">
            <div className="w-fit h-fit dark:bg-background bg-black rounded-full p-1">
              <Image src={'/logo/f1-companion-logo.png'} alt="F1 companion Logo" width={100} height={100} loading="eager"></Image>
            </div>
            <span className="text-2xl text-black dark:text-white italic tracking-tight">F1</span><span className="text-sm mt-4 text-dark dark:text-white">companion</span>
          </Link>
    )
}