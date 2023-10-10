import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {FootballApiService} from "../../../../../core/api/football-api.service";
import {Fixture} from "../../../shared/components/fixtures-table/fixtures-table.typings";
import {map} from "rxjs";

export const fixturesResolver: ResolveFn<Fixture[]> = (route, state) => {
    const teamId = route.paramMap.get('teamId');
    const country = route.paramMap.get('country');
    if(!country || !teamId) {
        return [];
    }
    const leagueCountry = FootballApiService.countriesLeaguesMap.get(country);
    if(!leagueCountry?.id) {
        return [];
    }
    const footballApiService = inject(FootballApiService);
    return footballApiService.getFixtures(Number(teamId), Number(leagueCountry.id))
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
