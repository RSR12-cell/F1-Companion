export type Drivers = {
  id: string;
  first_name: string;
  last_name: string;
  team_id: string;
  number: number;
  image_url?: string;
};

export type Team = {
  id: string;
  name: string;
  logo_url?: string;
};

export type Tracks = {
  id: string;
  name: string;
  location: string;
  distance: number;
  track_image_url?: string;
};

export type Predictions = {
  id: string;
  race_id: string;
  first_racer_id: string;
  second_racer_id: string;
  third_racer_id: string;
};

export type Results = {
  race_id: string;
  first_racer_id: string;
  second_racer_id: string;
  third_racer_id: string;
};

export type Race = {
  id: string;
  track_id: string;
  laps: number;
  race_date: string;
  race_start_time: string;
};

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  //Will put in auth information later
};

export type DriversTable = {
  first_name: string;
  last_name: string;
  number: number;
  image_url: string;
  team_name: string;
  team_logo: string;
};
