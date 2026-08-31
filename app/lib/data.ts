import postgres from "postgres";
import { Team } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const items_per_page = 3;
async function fetchTeams(currentPage: number) {
  const offset = (currentPage - 1) * items_per_page;
  const teams = await sql<Team[]>`
        SELECT *
        FROM teams
        LIMIT ${items_per_page}
        OFFSET ${offset}
    `;

  return teams;
}

async function fetchTeamCount() {
  const total = await sql<{ team_count: number }[]>`
    SELECT COUNT(*) AS team_count from teams;
  `;

  return total[0];
}
export { fetchTeams, fetchTeamCount };
