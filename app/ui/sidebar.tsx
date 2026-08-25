import Link from 'next/link'
import React from 'react';


export default function sideBar() {

    const linkClass = (item: string) => {
        return 'w-full flex items-center justify-center hover:bg-cyan-950 hover:underline hover:text-cyan-100 flex-1 border-b-2 border-b-transparent rounded-b-2xl rounded-t-lg hover:border-gray-600';
    }

    let linkMap: { href: string, image_name: string, text: string }[] = [
        { href: '/teams', image_name: 'teams', text: 'Teams' },
        { href: '/racers', image_name: 'racers', text: 'Racers' },
        { href: '/tracks', image_name: 'tracks', text: 'Tracks' },
        { href: '/races', image_name: 'races', text: 'Races' },
        { href: '/results', image_name: 'results', text: 'Results' },
    ]

    return (
        <div className="my-2.5  bg-foreground text-text h-full  w-45  mt-0  transition-shadow duration-300 ease-in-out " >
            <nav className="flex flex-col justify-around text-text h-full items-center w-full gap-2 ">
                {
                    linkMap.map((obj, i) => (createLink(obj.href, obj.image_name, obj.text, i)))
                }
            </nav>
        </div>
    )
}

function createLink(href: string, image_name: string, text: string, index: number) {
    return (
        <Link key={index} href={href} style={{ "--hover-image": `url(/side-bar-img/${image_name}.jpg)` } as React.CSSProperties}
        className="
            relative isolate overflow-hidden
            w-full flex flex-1 items-center justify-center
    
            before:absolute
            before:inset-x-0
            before:top-0
            before:h-full
            before:-z-10
            before:bg-[image:var(--hover-image)]
            before:bg-cover
            before:bg-center
    
            before:translate-y-[-110%]
            before:transition-transform
            before:duration-500
            before:ease-out
    

            after:absolute
            after:content-['']
            after:scale-x-0
            after:inset-x-0
            after:h-[35%]
            after:-z-5
            after:transition-all
            after:duration-500
            after:ease-in-out
            after:bg-black/60


            hover:after:scale-x-100

            hover:before:translate-y-0
            
            hover:italic
            hover:underline
            hover:text-cyan-100
            border-b-2 border-b-transparent
            rounded-b-2xl rounded-t-lg
            hover:border-gray-600
          "
            >
            <div className="
            w-full h-fit text-lg text-center  text-text relative isolate overflow-hidden z-0">
                {text}
            </div>
        </Link>
    )
}

// backdrop-blur-lg

// C:\Users\Rene\Desktop\Nextjs\F1-race-prediction\f1-companion\public\side-bar-img\teams.jpg
{/* <Link href={'/teams'} >Teams</Link>
<Link href={'/racers'} className={linkClass('racers')}>Racers</Link>
<Link href={'/tracks'} className={linkClass('tracks')}>Tracks</Link>
<Link href={'/races'} className={linkClass('races')}>Races</Link>
<Link href={'/results'} className={linkClass('results')}>Results</Link> */}