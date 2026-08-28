import TeamTable from "@/app/ui/Table/TeamTable";

export default function Home() {
  return (
    <div className="bg-foreground my-2.5 flex-1 rounded-2xl p-3 text-(--color-text)">
      <TeamTable />
    </div>
  );
}
