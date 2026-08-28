import postgres from "postgres";
import { Team } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function fetchTeams() {
  const teams = await sql<Team[]>`
        SELECT *
        FROM teams
        LIMIT 11;
    `;

  return teams;
}

export { fetchTeams };
