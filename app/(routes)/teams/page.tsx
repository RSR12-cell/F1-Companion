import { fetchTeamCount } from "@/app/lib/data";
import Pagination from "@/app/ui/Pagination/pagination";
import SearchBar from "@/app/ui/Searchbar/Searchbar";
import TeamTable from "@/app/ui/Table/TeamTable";
import TeamTableSuspense from "@/app/ui/Table/TeamTableSuspense";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams?: Promise<{ page?: string; query?: string }>;
}) {
  const params = await props.searchParams;

  const pageNumber = Number(params?.page) || 1;
  const query = params?.query || "";
  const teamCount = await fetchTeamCount(query);
  return (
    <div className="bg-foreground my-2.5 flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl p-3 text-(--color-text)">
      <SearchBar placeHolder="Search Teams ..." />
      <Suspense fallback={<TeamTableSuspense />} key={pageNumber}>
        <TeamTable currentPage={Number(pageNumber)} teamName={query} />
      </Suspense>
      <Pagination
        totalPages={Math.ceil(teamCount.team_count / 3)}
        currentPage={pageNumber}
      />
    </div>
  );
}
