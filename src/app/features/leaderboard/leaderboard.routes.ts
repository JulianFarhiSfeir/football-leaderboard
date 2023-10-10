import {Routes} from '@angular/router';
import {LeaderboardComponent} from "./leaderboard.component";
import {standingsResolver} from "./views/country/resolvers/standings.resolver";
import {fixturesResolver} from "./views/team/resolvers/fixtures.resolver";
import {FootballApiService} from "../../core/api/football-api.service";
import {teamNameResolver} from "./views/team/resolvers/team-name.resolver";

export const LEADERBOARD_ROUTES_PARAMS = {
    country: {
        placeholder: ':country',
        param: 'country'
    },
    teamName: {
        placeholder: ':teamName',
        param: 'teamName'
    },
    teamId: {
        placeholder: ':teamId',
        param: 'teamId'
    }
}
export const LEADERBOARD_ROUTES: Routes = [
    {
        path: 'country',
        component: LeaderboardComponent,
        children: [
            {
                path: `${LEADERBOARD_ROUTES_PARAMS.country.placeholder}`,
                loadComponent: () => import('././views/country/country.component').then(c => c.CountryComponent),
                resolve: {
                    standings: standingsResolver
                },
            },
            {
                path: `${LEADERBOARD_ROUTES_PARAMS.country.placeholder}/team/${LEADERBOARD_ROUTES_PARAMS.teamName.placeholder}/${LEADERBOARD_ROUTES_PARAMS.teamId.placeholder}`,
                loadComponent: () => import('./views/team/team.component').then(c => c.TeamComponent),
                resolve: {
                    fixtures: fixturesResolver,
                    teamName: teamNameResolver,
                }
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: FootballApiService.countriesLeaguesCollection[0].country
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: `country`
    }
];
