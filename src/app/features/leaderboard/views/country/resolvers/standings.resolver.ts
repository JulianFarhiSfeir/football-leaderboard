import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {map} from "rxjs";
import {FootballApiService} from "../../../../../core/api/football-api.service";
import {Standing} from "../../../shared/components/standings-table/standings-table.typings";
import {LEADERBOARD_ROUTES_PARAMS} from "../../../leaderboard.routes";

export const standingsResolver: ResolveFn<Standing[]> = (route, state) => {
    const footballApiService = inject(FootballApiService);
    const country = route.paramMap.get(LEADERBOARD_ROUTES_PARAMS.country.param);

    if (!country) {
        return [];
    }

    const league = FootballApiService.countriesLeaguesMap.get(country);
    if (!league?.id) {
        return [];
    }
    return footballApiService.getStanding(league.id)
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
