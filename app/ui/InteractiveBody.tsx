'use client'

import React, { useState } from "react";

type prop = {
    logo: React.ReactNode, 
    sideBar: React.ReactNode, 
    children: React.ReactNode
}

export default function interactiveBody({logo, sideBar, children}: prop){
    const[isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="flex flex-col min-h-screen gap-3">
            <div className="w-full h-[75px] flex items-start justify-between gap-9 px-5">
                <div className="items-center justify-center text-text text-4xl w-fit h-full cursor-pointer flex" onClick={_ => setIsOpen(b => !b)}>
                ☰
                </div>
                    {logo}
                </div>
        
            
                <div className="flex flex-row h-[80vh] pr-1.5 gap-5 relative">
                <aside className={`bg-foreground top-0 h-full rounded-r-3xl shadow-lime-400 hover:shadow-[-1px_0px_20px] overflow-hidden left-0  transition-all duration-150 ease-in-out ${isOpen? 'w-45' : 'w-0'}`}>
                    {sideBar}
                </aside>
                {children}
                </div>
            
        </div>
    )
}