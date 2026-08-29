import { fetchTeamCount } from "@/app/lib/data";
import Pagination from "@/app/ui/Pagination/pagination";
import TeamTable from "@/app/ui/Table/TeamTable";

export default async function Home(props: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = await props.searchParams;

  const pageNumber = Number(params?.page) || 1;
  const teamCount = await fetchTeamCount();
  return (
    <div className="bg-foreground my-2.5 flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl p-3 text-(--color-text)">
      <TeamTable currentPage={Number(pageNumber)} />
      <Pagination totalPages={teamCount.team_count} />
    </div>
  );
}
