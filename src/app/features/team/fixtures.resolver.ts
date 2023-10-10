import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {FootballApiService} from "../../core/football-api.service";
import {Fixture} from "./fixtures-table/fixtures-table.typings";
import {map} from "rxjs";

export const fixturesResolver: ResolveFn<Fixture[]> = (route, state) => {
    const teamId = route.paramMap.get('teamId');
    const footballApiService = inject(FootballApiService);
    if (!teamId) {
        return [];
    }
    return footballApiService.getFixtures(Number(teamId))
        .pipe(
            map((externalFixtures) => externalFixtures.map((ef) =>
                new Fixture({
                    awayLogo: ef.teams.away.logo,
                    awayScore: ef.goals.away,
                    awayTeamName: ef.teams.away.name,
                    homeLogo: ef.teams.home.logo,
                    homeScore: ef.goals.home,
                    homeTeamName: ef.teams.home.name
                })
            ))
        );
};
