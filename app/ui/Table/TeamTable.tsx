import { fetchTeams } from "@/app/lib/data";
import Image from "next/image";

export default async function TeamTable() {
  const teams = await fetchTeams();
  return (
    <table className="bg-background w-full border-separate border-spacing-3 rounded-2xl border border-mist-800">
      <thead>
        <tr>
          <th
            scope="col"
            className="bg-foreground rounded-lg border border-mist-600 py-2"
          >
            Logo
          </th>
          <th
            scope="col"
            className="bg-foreground rounded-lg border border-mist-600 py-2"
          >
            Team Name
          </th>
        </tr>
      </thead>
      <tbody>
        {teams.map((t, i) => (
          <tr key={`${t.id} - ${i}`}>
            <td className="bg-foreground flex flex-row justify-center rounded-lg border border-mist-600 py-1">
              <div className="bg-background flex aspect-square w-fit flex-col items-center justify-center rounded-full p-2">
                <Image
                  alt={`${t.name} logo`}
                  src={`${t.logo_url ?? ""}.png`}
                  width={60}
                  height={60}
                  className="h-auto max-h-full w-auto max-w-full"
                ></Image>
              </div>
            </td>
            <td className="bg-foreground rounded-lg border border-mist-600 py-1 text-center text-sm">
              {t.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// <tr>
// <td className="bg-foreground rounded-lg border border-mist-600 py-1 text-center text-sm">
//   Image Here
// </td>
// <td className="bg-foreground rounded-lg border border-mist-600 py-1 text-center text-sm">
//   Team Name Here
// </td>
// </tr>
