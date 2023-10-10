import {Routes} from '@angular/router';
import {LeaderboardComponent} from "./leaderboard.component";
import {standingsResolver} from "./views/country/resolvers/standings.resolver";
import {fixturesResolver} from "./views/team/resolvers/fixtures.resolver";
import {FootballApiService} from "../../core/api/football-api.service";

export const LEADERBOARD_ROUTES: Routes = [
    {
        path: 'country',
        component: LeaderboardComponent,
        children: [
            {
                path: ':country',
                loadComponent: () => import('././views/country/country.component').then(c => c.CountryComponent),
                resolve: {
                    standings: standingsResolver
                },
            },
            {
                path: ':country/team/:teamId',
                loadComponent: () => import('./views/team/team.component').then(c => c.TeamComponent),
                resolve: {
                    fixtures: fixturesResolver
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
