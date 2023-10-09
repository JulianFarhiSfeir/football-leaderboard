// todo
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

  constructor({
                rank,
                logo,
                teamName,
                teamId,
                gamesCount,
                winCount,
                lossesCount,
                drawsCount,
                goalDifferenceCount,
                points
              }: {
    rank: number,
    logo: string,
    teamName: string,
    teamId: number
    gamesCount: number,
    winCount: number,
    lossesCount: number,
    drawsCount: number,
    goalDifferenceCount: number,
    points: number
  }) {
    this.rank = rank;
    this.logo = logo;
    this.teamName = teamName;
    this.teamId = teamId;
    this.gamesCount = gamesCount;
    this.winCount = winCount;
    this.lossesCount = lossesCount;
    this.drawsCount = drawsCount;
    this.goalDifferenceCount = goalDifferenceCount;
    this.points = points;
  }
}
