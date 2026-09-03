import { fetchFiliteredDrivers } from "@/app/lib/data";
import Card from "../../Card/card";
import Image from "next/image";
import { Tangerine } from "next/font/google";

const numberFont = Tangerine({
  weight: "700",
});

export default async function DriverCardHolder({ query }: { query: string }) {
  const drivers = await fetchFiliteredDrivers(query);
  return (
    <div className="border-background scrollbar-track-background scrollbar-thumb-foreground scrollbar-wid grid h-[50vh] w-full grid-cols-2 items-center gap-4 overflow-y-scroll rounded-2xl border-2 p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {drivers.map((d, index) => (
        <Card
          title={`${d.first_name} ${d.last_name}`}
          imagePath={`/drivers/${d.image_url}`}
          extraDetails={
            <DriverExtraDetails
              driverNumber={d.number}
              teamLogo={`${d.team_logo}.png`}
              teamName={d.team_name}
            />
          }
          key={`${index}-${d.first_name}-${d.last_name}-${d.number}`}
        />
      ))}
    </div>
  );
}

function DriverExtraDetails({
  driverNumber,
  teamLogo,
  teamName,
}: {
  driverNumber: number;
  teamName: string;
  teamLogo: string;
}) {
  return (
    <div className="bg-background flex h-full w-full flex-row px-2">
      <div className="flex flex-1 flex-col items-center justify-center gap-1.5">
        <Image
          src={teamLogo}
          alt="alt"
          width={30}
          height={30}
          className="bg-foreground w-auto rounded-full"
        />
        <span className="text-center font-sans text-sm italic">{teamName}</span>
      </div>
      <div
        className={`flex flex-1 items-center justify-center text-2xl ${numberFont.className}`}
      >
        {driverNumber}
      </div>
    </div>
  );
}
