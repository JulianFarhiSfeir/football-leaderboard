import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {
    ExternalFixture,
    ExternalPayload,
    ExternalStanding, ExternalStandingsPayload,
    LeagueCountries,
    LeagueCountry
} from "./football-api.typings";

@Injectable({
    providedIn: 'root'
})
export class FootballApiService {
    private static LEAGUES_COUNTRIES: LeagueCountries = {
        England: {
            countryName: 'England',
            leagueName: 'Premier League',
            countryId: 39,
        },
        Spain: {
            countryName: 'Spain',
            leagueName: 'La Liga',
            countryId: 140,
        },
        France: {
            countryName: 'France',
            leagueName: 'Ligue 1',
            countryId: 61,
        },
        Germany: {
            countryName: 'Germany',
            leagueName: 'Bundesliga',
            countryId: 78,
        },
        Italy: {
            countryName: 'Italy',
            leagueName: 'Serie A',
            countryId: 135,
        },
    }
    public static leaguesCountriesCollection: LeagueCountry[] = Object.values(FootballApiService.LEAGUES_COUNTRIES);
    public static leaguesCountriesMap: Map<string, LeagueCountry> = new Map(
        FootballApiService.leaguesCountriesCollection.map((country: LeagueCountry) =>
            [country.countryName, country]
        )
    );

    constructor(private httpClient: HttpClient) {
    }

    // todo
    public getLeague(country: string, league: string) {
        return this.httpClient.get(`${environment.footballApiBaseUrl}/leagues`, {
            params: new HttpParams({
                fromObject: {
                    name: league,
                    country,
                }
            })
        })
    }

    public getStanding(leagueId: number): Observable<ExternalStanding[]> {
        return this.httpClient.get<ExternalPayload<ExternalStandingsPayload[]>>(`${environment.footballApiBaseUrl}/standings`, {
            params: new HttpParams({
                fromObject: {
                    league: leagueId,
                    season: new Date().getFullYear()
                }
            }),
        })
            .pipe(
                map((payload) => payload.response?.[0]?.league?.standings[0])
            )
    }

    public getFixtures(teamId: number): Observable<ExternalFixture[]> {
        return this.httpClient.get<ExternalPayload<ExternalFixture[]>>(`${environment.footballApiBaseUrl}/fixtures`, {
            params: new HttpParams({
                fromObject: {
                    team: teamId,
                    last: 10
                }
            }),
        })
            .pipe(
                map((payload) => payload?.response)
            )
    }
}
