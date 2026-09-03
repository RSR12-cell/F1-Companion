import DriverCardHolder from "@/app/ui/Driver/Driver-Card-Holder/DriverCardHolder";
import SearchBar from "@/app/ui/Searchbar/Searchbar";

export default async function Home() {
  return (
    <div className="bg-foreground col my-2.5 flex flex-1 flex-col items-center justify-center gap-10 rounded-2xl p-3 text-(--color-text)">
      <SearchBar placeHolder="Find drivers ..." />
      <DriverCardHolder />
    </div>
  );
}
