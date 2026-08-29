"use client";

import { generatePaginationNumbers } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pageMap = generatePaginationNumbers(Math.ceil(totalPages / 4), 1);
  const pathname = usePathname();
  const searchParameter = useSearchParams();

  const generateUrl = (pageNumber: number | string) => {
    const searchParam = new URLSearchParams(searchParameter);
    searchParam.set("page", pageNumber.toString());
    return `${pathname}?${searchParam.toString()}`;
  };

  return (
    <div className="flex flex-row gap-5">
      {pageMap.map((value, index) => (
        <PaginationNumber
          display={value}
          href={generateUrl(value)}
          isEnabled={value !== "..."}
          key={`${index} : ${value}`}
        />
      ))}
    </div>
  );
}

function PaginationNumber({
  display,
  href,
  isEnabled,
}: {
  href: string;
  isEnabled: boolean;
  display: string | number;
}) {
  if (isEnabled) {
    return (
      <Link href={href} className="bg-background rounded-3xl p-3">
        <div className="bg-foreground aspect-square h-fit w-fit rounded-3xl p-2.5 transition-all duration-200 ease-in hover:bg-red-900 hover:text-sky-200">
          {display}
        </div>
      </Link>
    );
  } else {
    return <div>{display}</div>;
  }
}
