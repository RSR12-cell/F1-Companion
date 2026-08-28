"use client";

import { useEffect, useState } from "react";
import Logo from "../logo";
import navBarLinks from "../navBarLinks";
import { usePathname } from "next/navigation";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathName = usePathname();
  const links = navBarLinks(pathName);
  return (
    <div className="bg-background flex h-[15vh] w-screen flex-row justify-between px-2">
      <Logo></Logo>
      <div className="hidden h-full w-fit flex-row gap-5 lg:flex">{links}</div>
      <div
        className="text-text flex h-full cursor-pointer items-center justify-center px-5 text-3xl lg:hidden"
        onClick={(_) => setOpenMenu(true)}
      >
        ≡
      </div>
      {openMenu && (
        <div className="absolute top-0 right-0 bottom-0 left-0 m-0 bg-black/70">
          <div className="mt-10 mr-1.5 ml-auto flex w-45 flex-col gap-4">
            <button
              onClick={(_) => setOpenMenu(false)}
              className="aspect-square w-fit cursor-pointer rounded-full bg-white text-center text-xl text-black hover:bg-black hover:text-white"
            >
              X
            </button>
            {links}
          </div>
        </div>
      )}
    </div>
  );
}
