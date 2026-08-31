import Pagination from "@/app/ui/Pagination/pagination";

export default function Home() {
  return (
    <div className="bg-foreground my-2.5 flex-1 rounded-2xl p-3 text-(--color-text)">
      <Pagination currentPage={1} totalPages={19} />
    </div>
  );
}
