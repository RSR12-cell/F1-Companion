import CardSkelton from "../../Card/CardSkeleton";

export default async function DriverCardHolderSkeleton() {
  return (
    <div className="border-background scrollbar-track-background scrollbar-thumb-foreground scrollbar-wid grid h-[50vh] w-full grid-cols-2 items-center gap-4 overflow-y-scroll rounded-2xl border-2 p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
    </div>
  );
}
