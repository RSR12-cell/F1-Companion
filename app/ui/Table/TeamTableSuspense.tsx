const shimmer = `before:from-background before:via-foreground before:to-background before:absolute before:inset-0 before:animate-[shimmer_2s_infinite] before:bg-linear-to-r`;

export default function TeamTableSuspense() {
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
        <TeamTableSuspenseCell />
        <TeamTableSuspenseCell />
        <TeamTableSuspenseCell />
      </tbody>
    </table>
  );
}

function TeamTableSuspenseCell() {
  return (
    <tr>
      <td className="bg-foreground rounded-lg border border-mist-600 py-1">
        <div className="flex h-fit w-full items-center justify-center">
          <div
            className={`${shimmer} bg-background relative isolate flex aspect-square w-[70px] flex-col items-center justify-center overflow-hidden rounded-full p-2`}
          ></div>
        </div>
      </td>
      <td className="bg-foreground rounded-lg border border-mist-600 py-1 text-sm">
        <div className="flex h-7 w-full items-center justify-center">
          <div
            className={`${shimmer} bg-background relative isolate h-full w-75 overflow-hidden rounded-2xl`}
          ></div>
        </div>
      </td>
    </tr>
  );
}
