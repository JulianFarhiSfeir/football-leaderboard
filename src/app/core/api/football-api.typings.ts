export interface ExternalStanding {
    rank: number;
    team: {
        id: number;
        name: string;
        logo: string;
    },
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
            for: number;
            against: number;
        }
    }
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

export interface League {
    country: string;
    id: number;
    name: string;
}

export interface CountriesLeagues {
    [key: string]: League
}

export interface ExternalPayload<T> {
    response: T
}

export interface ExternalStandingsPayload {
    league: {
        standings: Array<ExternalStanding[]>
    }
}
