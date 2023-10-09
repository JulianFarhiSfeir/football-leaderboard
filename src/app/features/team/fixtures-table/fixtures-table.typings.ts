export class Fixture {
  homeLogo: string;
  homeTeamName: string;
  homeScore: number;
  awayLogo: string;
  awayTeamName: string;
  awayScore: number;

  constructor({homeLogo, homeTeamName, homeScore, awayLogo, awayTeamName, awayScore}: {
    homeLogo: string,
    homeTeamName: string,
    homeScore: number,
    awayLogo: string,
    awayTeamName: string,
    awayScore: number
  }) {
    this.homeLogo = homeLogo;
    this.homeTeamName = homeTeamName;
    this.homeScore = homeScore;
    this.awayLogo = awayLogo;
    this.awayTeamName = awayTeamName;
    this.awayScore = awayScore;
  }
}
