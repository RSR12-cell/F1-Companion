import Link from 'next/link'
import React from 'react';


export default function sideBar(){

    const linkClass = (item: string) => {
        return 'w-full flex items-center justify-center hover:bg-cyan-950 hover:underline hover:text-cyan-100 flex-1 border-b-2 border-b-transparent rounded-b-2xl rounded-t-lg hover:border-gray-600';
    }

    let linkMap: {href:string, image_name:string, text:string}[] = [
        {href: '/teams', image_name: 'teams', text: 'Teams'},
        {href: '/racers', image_name: 'racers', text: 'Racers'},
        {href: '/tracks', image_name: 'tracks', text: 'Tracks'},
        {href: '/races', image_name: 'races', text: 'Races'},
        {href: '/results', image_name: 'results', text: 'Results'},
    ] 

    return(
        <div className="my-2.5 bg-foreground text-text  w-45 rounded-r-3xl py-15  shadow-lime-400 transition-shadow duration-300 ease-in-out hover:shadow-[6px_-5px_20px] " >
            <nav className="flex flex-col justify-between text-text h-full items-center w-full">
                {
                    linkMap.map((obj, i) => (createLink(obj.href, obj.image_name, obj.text, i)))
                }
            </nav>
        </div>
    )
}

function createLink(href: string, image_name: string, text: string, index: number){
    return (
            <Link key={index} href={href} style={{"--hover-image": `url(/side-bar-img/${image_name}.jpg)`}as React.CSSProperties} className={`w-full flex items-center 
                                                                                                                                        hover:bg-[image:var(--hover-image)]
                                                                                                                                        justify-center bg-cover hover:underline 
                                                                                                                                        hover:text-cyan-100 flex-1 border-b-2 
                                                                                                                                        border-b-transparent rounded-b-2xl 
                                                                                                                                        rounded-t-lg hover:border-gray-600`
                                                                                                                                        }>
                {text}
            </Link>
        )
}

// C:\Users\Rene\Desktop\Nextjs\F1-race-prediction\f1-companion\public\side-bar-img\teams.jpg
{/* <Link href={'/teams'} >Teams</Link>
<Link href={'/racers'} className={linkClass('racers')}>Racers</Link>
<Link href={'/tracks'} className={linkClass('tracks')}>Tracks</Link>
<Link href={'/races'} className={linkClass('races')}>Races</Link>
<Link href={'/results'} className={linkClass('results')}>Results</Link> */}