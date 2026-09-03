"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ placeHolder }: { placeHolder: string }) {
  const pathName = usePathname();
  const params = useSearchParams();
  const { replace } = useRouter();

  const handleOnSearch = useDebouncedCallback((term: string) => {
    const searchParam = new URLSearchParams(params);

    if (term) {
      searchParam.set("query", term);
      searchParam.delete("page");
      const path = `${pathName}?${searchParam.toString()}`;
      replace(path);
    } else {
      searchParam.delete("query");
      replace(`${pathName}?${searchParam.toString()}`);
    }
  }, 300);

  return (
    <div className="bg-foreground border-background text-text relative flex h-10 w-[60%] items-center justify-center rounded-2xl border-2">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        defaultValue={params.get("query")?.toString()}
        className="bg-foreground text-text isolate h-full w-full rounded-2xl px-3 pl-10 text-sm outline-0 peer-focus:text-gray-400 placeholder:text-gray-500 focus:outline-1 focus:outline-slate-600"
        placeholder={placeHolder}
        onChange={(e) => handleOnSearch(e.target.value)}
      />
      <Search className="peer absolute top-[50%] left-2 z-10 translate-y-[-50%]" />
    </div>
  );
}
