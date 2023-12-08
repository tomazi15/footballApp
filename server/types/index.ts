export type TClub = {
  name: string;
  stadium: string;
  stadiumCapacity: number;
  manager: string;
  players: string[];
  trophies: TClubTrophies;
};

export type TClubTrophies = {
  premierLeague: number;
  faCup: number;
  championsLeague: number;
};

