
export interface LeagueCountry {
  name: string;
  league: string;
  id: number;
}
export const Countries: LeagueCountry[] = [
  {
    name: 'England',
    league: 'Premier League',
    id: 39,
  },
  {
    name: 'Spain',
    league: 'La Liga',
    id: 140,
  },
  {
    name: 'France',
    league: 'Ligue 1',
    id: 61,
  },
  {
    name: 'Germany',
    league: 'Bundesliga',
    id: 78,
  },
  {
    name: 'Italy',
    league: 'Serie A',
    id: 135,
  },
]

export const CountriesMap: Map<string, Required<LeagueCountry>> = new Map(
  Countries.map((country) => [country.name, country])
)
