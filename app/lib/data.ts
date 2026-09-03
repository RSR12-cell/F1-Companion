import postgres from "postgres";
import { DriversTable, Team } from "./definitions";

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

async function fetchFiliteredDrivers(query: string) {
  const drivers = await sql<DriversTable[]>`
  SELECT d.first_name, d.last_name, d.number, d.image_url, t.name AS team_name, t.logo_url AS team_logo
  FROM drivers d
  INNER JOIN teams t ON t.id = d.team_id
  WHERE first_name ILIKE ${`%${query}%`} OR 
        last_name ILIKE ${`%${query}%`} OR
        number::TEXT ILIKE ${`%${query}%`} OR
        t.name ILIKE ${`%${query}%`};
  `;
  return drivers;
}

export { fetchTeams, fetchTeamCount, fetchFiliteredDrivers };
