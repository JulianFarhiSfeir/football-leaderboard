import {ResolveFn} from '@angular/router';
import {CountriesMap} from "../../core/countries";
import {inject} from "@angular/core";
import {map} from "rxjs";
import {FootballApiService} from "../../core/football-api.service";
import {Standing} from "./components/standings-table/standings-table.typings";

export const standingsResolver: ResolveFn<Standing[]> = (route, state) => {
  const footballApiService = inject(FootballApiService);
  const country = route.paramMap.get('country');

  if(!country) {
    return [];
  }

  const leagueCountry = CountriesMap.get(country);
  return footballApiService.getStanding(leagueCountry!.id)
    .pipe(
      map((standings) => standings.map((standing) =>
        new Standing({
            rank: standing.rank,
            teamName: standing.team.name,
            teamId: standing.team.id,
            drawsCount: standing.all.draw,
            gamesCount: standing.all.played,
            logo: standing.team.logo,
            goalDifferenceCount: standing.goalsDiff,
            lossesCount: standing.all.lose,
            points: standing.points,
            winCount: standing.all.win
          }
        )))
    )
};
