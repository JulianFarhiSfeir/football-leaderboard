import {Routes} from '@angular/router';
import {LeaderboardComponent} from "./leaderboard.component";
import {standingsResolver} from "./standings.resolver";
import {CountryComponent} from "../country/country.component";
import {TeamComponent} from "../team/team.component";
import {fixturesResolver} from "../team/fixtures.resolver";
import {FootballApiService} from "../../core/football-api.service";

export const LEADERBOARD_ROUTES: Routes = [
    {
        path: 'country',
        component: LeaderboardComponent,
        children: [
            {
                path: ':country',
                resolve: {
                    standings: standingsResolver
                },
                component: CountryComponent
            },
            {
                path: ':country/team/:teamId',
                component: TeamComponent,
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
