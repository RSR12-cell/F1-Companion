import postgres from "postgres";
import { Team } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const items_per_page = 3;
async function fetchTeams(currentPage: number, teamName: string) {
  const offset = (currentPage - 1) * items_per_page;
  const teams = await sql<Team[]>`
        SELECT *
        FROM teams
        WHERE name ILIKE ${`%${teamName}%`}
        LIMIT ${items_per_page}
        OFFSET ${offset}
    `;

  return teams;
}

async function fetchTeamCount(teamName: string) {
  const total = await sql<{ team_count: number }[]>`
    SELECT COUNT(*) AS team_count from teams
    WHERE name ILIKE ${`%${teamName}%`};
  `;
  return total[0];
}
export { fetchTeams, fetchTeamCount };
