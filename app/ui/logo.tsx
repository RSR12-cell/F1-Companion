import Link from 'next/link'
import Image from 'next/image'

export default function Logo(){
    return(
        <Link href={'/'} className="flex h-full items-center justify-start gap-1.5 flex-1">
            <div className="w-fit h-fit dark:bg-background bg-background rounded-full p-1">
              <Image src={'/logo/f1-companion-logo.png'} alt="F1 companion Logo" width={50} height={50} loading="eager"></Image>
            </div>
            <span className="text-2xl text-black dark:text-white italic tracking-tight">F1</span><span className="text-sm mt-4 text-dark dark:text-white">companion</span>
          </Link>
    )
}