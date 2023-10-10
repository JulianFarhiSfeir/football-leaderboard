interface ConstructorParams {
    homeLogo: string;
    homeTeamName: string;
    homeScore: number;
    awayLogo: string;
    awayTeamName: string;
    awayScore: number;
}

export class Fixture {
    homeLogo: string;
    homeTeamName: string;
    homeScore: number;
    awayLogo: string;
    awayTeamName: string;
    awayScore: number;

    constructor(payload: ConstructorParams) {
        this.homeLogo = payload.homeLogo;
        this.homeTeamName = payload.homeTeamName;
        this.homeScore = payload.homeScore;
        this.awayLogo = payload.awayLogo;
        this.awayTeamName = payload.awayTeamName;
        this.awayScore = payload.awayScore;
    }
}
