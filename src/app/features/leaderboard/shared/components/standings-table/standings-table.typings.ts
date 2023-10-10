interface ConstructorParams {
    rank: number;
    logo: string;
    teamName: string;
    teamId: number;
    gamesCount: number;
    winCount: number;
    lossesCount: number;
    drawsCount: number;
    goalDifferenceCount: number;
    points: number;
}

export class Standing {
    rank: number;
    logo: string;
    teamName: string;
    teamId: number;
    gamesCount: number;
    winCount: number;
    lossesCount: number;
    drawsCount: number;
    goalDifferenceCount: number;
    points: number;

    constructor(payload: ConstructorParams) {
        this.rank = payload.rank;
        this.logo = payload.logo;
        this.teamName = payload.teamName;
        this.teamId = payload.teamId;
        this.gamesCount = payload.gamesCount;
        this.winCount = payload.winCount;
        this.lossesCount = payload.lossesCount;
        this.drawsCount = payload.drawsCount;
        this.goalDifferenceCount = payload.goalDifferenceCount;
        this.points = payload.points;
    }
}
