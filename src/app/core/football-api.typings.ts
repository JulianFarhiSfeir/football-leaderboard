export interface ExternalStanding {
  "rank": number;
  "team": {
    "id": number;
    "name": string;
    "logo": string;
  },
  "points": number;
  "goalsDiff": number;
  "group": string;
  "form": string;
  "status": string;
  "description": string;
  "all": {
    "played": number;
    "win": number;
    "draw": number;
    "lose": number;
    "goals": {
      "for": number;
      "against": number;
    }
  }
}

export interface ExternalLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: ExternalStanding[]
}

export interface ExternalFixture {
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    },
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    }
  },
  goals: {
    home: number;
    away: number;
  }
}
