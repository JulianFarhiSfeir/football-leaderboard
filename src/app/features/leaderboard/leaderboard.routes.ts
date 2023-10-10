import {Routes} from '@angular/router';
import {LeaderboardComponent} from "./leaderboard.component";
import {standingsResolver} from "./standings.resolver";
import {fixturesResolver} from "./views/team/fixtures.resolver";
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
                redirectTo: FootballApiService.leaguesCountriesCollection[0].countryName
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: `country`
    }
];
