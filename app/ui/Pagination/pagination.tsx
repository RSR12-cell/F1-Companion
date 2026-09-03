"use client";

import { generatePaginationNumbers } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import clsx from "clsx";

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pageMap = generatePaginationNumbers(totalPages, 1);
  const pathname = usePathname();
  const searchParameter = useSearchParams();

  const generateUrl = (pageNumber: number | string) => {
    const searchParam = new URLSearchParams(searchParameter);
    searchParam.set("page", pageNumber.toString());
    return `${pathname}?${searchParam.toString()}`;
  };
  return (
    <div className="bg-background flex w-[60%] flex-row items-center justify-around gap-7 rounded-2xl px-5 py-4">
      <PaginationArrow
        direction="left"
        enabled={currentPage - 1 > 0}
        href={generateUrl(currentPage - 1)}
      />
      <div className="flex flex-row items-center justify-center gap-2">
        {pageMap.map((value, index) => (
          <PaginationNumber
            display={value}
            href={generateUrl(value)}
            isEnabled={
              value.toString() !== currentPage.toString() ||
              value.toString() !== "..."
            }
            isActive={currentPage === value}
            key={`${index} : ${value}`}
          />
        ))}
      </div>
      <PaginationArrow
        direction="right"
        enabled={currentPage < totalPages}
        href={generateUrl(currentPage + 1)}
      />
    </div>
  );
}

function PaginationNumber({
  display,
  href,
  isEnabled,
  isActive,
}: {
  href: string;
  isEnabled: boolean;
  display: string | number;
  isActive: boolean;
}) {
  if (isEnabled && !isActive) {
    return (
      <Link href={href}>
        <div
          className={clsx(
            "bg-foreground flex aspect-square h-fit w-15 items-center justify-center rounded-xl p-2.5 transition-all duration-200 ease-in hover:bg-sky-700 hover:text-sky-100",
          )}
        >
          {display}
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={clsx(
          "bg-foreground flex aspect-square h-fit w-15 items-center justify-center rounded-xl p-2.5 transition-all duration-200 ease-in hover:text-sky-200",
          isActive ? "bg-sky-200/30" : "hover:bg-sky-700",
        )}
      >
        {display}
      </div>
    );
  }
}

function PaginationArrow({
  direction,
  href,
  enabled,
}: {
  direction: "left" | "right";
  href: string;
  enabled: boolean;
}) {
  const display = direction === "left" ? "<" : ">";
  if (enabled) {
    return (
      <Link href={href}>
        <div className="bg-background hover:bg-background h-fit w-fit rounded-3xl p-2 text-2xl transition-all duration-150 ease-in">
          {display}
        </div>
      </Link>
    );
  } else {
    return (
      <div className="bg-background isolation relative h-fit w-fit overflow-hidden rounded-3xl p-2 text-2xl before:absolute before:-inset-x-1.5 before:top-[50%] before:h-1.5 before:rotate-45 before:bg-red-500/70 before:content-['']">
        {display}
      </div>
    );
  }
}

// after:absolute after:-inset-x-1.5 after:top-[50%] after:h-1.5 before:rotate-45 before:bg-red-500/50 before:content-['']
