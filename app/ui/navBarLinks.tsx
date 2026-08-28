import Link from "next/link";
import React from "react";

export default function navBarLinks(currentPath: string) {
  let linkMap: { href: string; image_name: string; text: string }[] = [
    { href: "/teams", image_name: "teams", text: "Teams" },
    { href: "/racers", image_name: "racers", text: "Racers" },
    { href: "/tracks", image_name: "tracks", text: "Tracks" },
    { href: "/races", image_name: "races", text: "Races" },
    { href: "/results", image_name: "results", text: "Results" },
  ];

  return linkMap.map((obj, i) =>
    createLink(obj.href, obj.image_name, obj.text, i, currentPath === obj.href),
  );
}

function createLink(
  href: string,
  image_name: string,
  text: string,
  index: number,
  isActive: boolean,
) {
  return (
    <Link
      key={index}
      href={href}
      style={
        {
          "--hover-image": `url(/side-bar-img/${image_name}.jpg)`,
          "--starting-pos": isActive ? "0%" : "-110%",
          "--starting-scale": isActive ? "100" : "0",
        } as React.CSSProperties
      }
      className="relative isolate flex w-full flex-1 items-center justify-center overflow-hidden rounded-t-lg rounded-b-2xl border-b-2 border-b-transparent before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-full before:translate-y-(--starting-pos) before:bg-(image:--hover-image) before:bg-cover before:bg-center before:transition-transform before:duration-500 before:ease-out after:absolute after:inset-x-0 after:-z-5 after:h-[35%] after:scale-x-(--starting-scale) after:bg-black/80 after:transition-all after:duration-500 after:ease-in-out after:content-[''] hover:border-gray-600 hover:text-cyan-100 hover:italic hover:underline hover:before:translate-y-0 hover:after:scale-x-100"
    >
      <div className="text-text relative isolate z-0 flex aspect-square h-full items-center justify-center overflow-hidden p-4 text-lg">
        {text}
      </div>
    </Link>
  );
}

// backdrop-blur-lg

// C:\Users\Rene\Desktop\Nextjs\F1-race-prediction\f1-companion\public\side-bar-img\teams.jpg
{
  /* <Link href={'/teams'} >Teams</Link>
<Link href={'/racers'} className={linkClass('racers')}>Racers</Link>
<Link href={'/tracks'} className={linkClass('tracks')}>Tracks</Link>
<Link href={'/races'} className={linkClass('races')}>Races</Link>
<Link href={'/results'} className={linkClass('results')}>Results</Link> */
}
