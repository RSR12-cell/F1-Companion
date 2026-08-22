import postgres from 'postgres';
import { getDriverPlaceHolderData, getRaces, getTeamPlaceHolderData, getTracks } from '../lib/placeholder-data';
import { log } from 'next/dist/server/typescript/utils';

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require', prepare: false})

async function seedTeams():Promise<{id: string, name:string}[]>  {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await sql`CREATE TABLE IF NOT EXISTS teams(
        id UUID default uuid_generate_v4() PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        logo_url TEXT
    );`

    //Here we insert the team placeholder-data
    const teams = getTeamPlaceHolderData();
    //Now I map the team objects into a sql string and send
   const returnedTeams = [];

   for(const team of teams){
        
       const result = await sql`
            INSERT INTO teams(name, logo_url)
            VALUES (${team.name}, ${team.logo_url?? null})
            ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
            RETURNING id,name;
        `

        returnedTeams.push(result)
   }

    //Now I need to turn returned teams into an object array [{id: string, name: string}]
    const teamNameAndId: {id: string, name:string}[] = [];
    for(const result of returnedTeams){
        const row = result[0];
        teamNameAndId.push({id: row.id, name: row.name})
    }
    
    return teamNameAndId;
}

async function seedDrivers(teams: {id:string,name: string}[]){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await sql`CREATE TABLE IF NOT EXISTS drivers(
        id UUID default uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        team_id UUID,
        number INT NOT NULL UNIQUE,
        image_url TEXT,

        FOREIGN KEY (team_id) REFERENCES teams(id)
    );`

    //Reason why team_id is nullable is that a driver may or may not have team for a season - more of a just in case
    const drivers = getDriverPlaceHolderData(teams);
    console.log(drivers)
    const returnedDrivers = []
    for(const driver of drivers){

        const result = await sql`
            INSERT INTO drivers (first_name, last_name, team_id, number)
            VALUES (${driver.first_name}, ${driver.last_name}, ${driver.team_id}, ${driver.number})
            ON CONFLICT (number) DO NOTHING;
        `//
        returnedDrivers.push(result)
    }

    return returnedDrivers;

}

async function seedTracks(): Promise<{id: string, name:string}[]> {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await sql`CREATE TABLE IF NOT EXISTS tracks(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        location TEXT,
        distance INT,
        track_image_url TEXT
    );`

    const tracks = getTracks();
    const returnedTracks = []
    for(const track of tracks){
        const result = await sql`
            INSERT INTO tracks(name, location, distance, track_image_url)
            VALUES(${track.name}, ${track.location}, ${track.distance}, ${track.track_image_url?? null})
            ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
            RETURNING id, name;
        `

        returnedTracks.push(result);
    }

    const trackNameAndId: {id: string, name: string}[] = [];

    for(const result of returnedTracks){
        const row = result[0];
        trackNameAndId.push({id: row.id, name:row.name})
    }

    return trackNameAndId;
}

async function seedRaces(tracks: {id:string,name: string}[]) {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await sql`CREATE TABLE IF NOT EXISTS races(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        track_id UUID NOT NULL UNIQUE,
        laps INT NOT NULL,
        race_date DATE NOT NULL,
        race_start_time TIME NOT NULL,

        FOREIGN KEY (track_id) REFERENCES tracks(id)
    );`

    const races = getRaces(tracks);


    const returnedTracks = []
    for(const race of races){

        const result = await sql`
            INSERT INTO races(track_id, laps, race_date, race_start_time)
            VALUES(${race.track_id}, ${race.laps}, ${race.race_date}, ${race.race_start_time})
            ON CONFLICT DO NOTHING;
        `
        returnedTracks.push(result);
    }

    return returnedTracks;
}

async function seedResults() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await sql`CREATE TABLE IF NOT EXISTS results(
        race_id UUID PRIMARY KEY,
        first_racer_id UUID,
        second_racer_id UUID,
        third_racer_id UUID,

        FOREIGN KEY (race_id) REFERENCES races(id),
        FOREIGN KEY (first_racer_id) REFERENCES drivers(id),
        FOREIGN KEY (second_racer_id) REFERENCES drivers(id),
        FOREIGN KEY (third_racer_id) REFERENCES drivers(id)
    );`
}

// export type Results = {
//     race_id: string,
//     first_racer_id: string,
//     second_racer_id: string,
//     third_racer_id: string
// }

export async function GET(){
    try {
        console.log("Starting Seeding Operation:")
        const teams = await seedTeams();
        console.log("1. Team data Seeded")
        await seedDrivers(teams);
        console.log("2.Driver data seeded")
        const tracks = await seedTracks();
        console.log("3.Track data seeded")
        await seedRaces(tracks);
        console.log("4.Races data seeded")
        await seedResults()
        console.log("5.Results data seeded")
        
        return Response.json({message: 'Database Tables created'})
    } catch (error) {
        return Response.json({message: `${error}`})
    }
}