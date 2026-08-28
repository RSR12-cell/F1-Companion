"use client";

import React, { useState } from "react";

type prop = {
  logo: React.ReactNode;
  sideBar: React.ReactNode;
  children: React.ReactNode;
};

export default function interactiveBody({ logo, sideBar, children }: prop) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen flex-col gap-3">
      <div className="flex h-[75px] w-full items-start justify-between gap-9 px-5">
        <div
          className="text-text flex h-full w-fit cursor-pointer items-center justify-center text-4xl"
          onClick={(_) => setIsOpen((b) => !b)}
        >
          ☰
        </div>
        {logo}
      </div>

      <div className="relative flex h-[80vh] flex-row gap-5 pr-1.5">
        <aside
          className={`bg-foreground absolute top-0 left-0 h-full overflow-hidden rounded-r-3xl shadow-lime-400 transition-all duration-150 ease-in-out hover:shadow-[-1px_0px_20px] ${isOpen ? "w-45" : "w-0"} backdrop-blur-2xl sm:relative sm:backdrop-blur-none`}
        >
          {sideBar}
        </aside>
        {children}
      </div>
    </div>
  );
}
