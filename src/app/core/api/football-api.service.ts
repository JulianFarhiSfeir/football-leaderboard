import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {
    ExternalFixture,
    ExternalPayload,
    ExternalStanding, ExternalStandingsPayload,
    CountriesLeagues,
    League
} from "./football-api.typings";

@Injectable({
    providedIn: 'root'
})
export class FootballApiService {
    private static COUNTRIES_LEAGUES: CountriesLeagues = {
        England: {
            country: 'England',
            name: 'Premier League',
            id: 39,
        },
        Spain: {
            country: 'Spain',
            name: 'La Liga',
            id: 140,
        },
        France: {
            country: 'France',
            name: 'Ligue 1',
            id: 61,
        },
        Germany: {
            country: 'Germany',
            name: 'Bundesliga',
            id: 78,
        },
        Italy: {
            country: 'Italy',
            name: 'Serie A',
            id: 135,
        },
    }
    public static countriesLeaguesCollection: League[] = Object.values(FootballApiService.COUNTRIES_LEAGUES);
    public static countriesLeaguesMap: Map<string, League> = new Map(
        FootballApiService.countriesLeaguesCollection.map((country: League) =>
            [country.country, country]
        )
    );

    constructor(private httpClient: HttpClient) {
    }

    public getStanding(leagueId: number): Observable<ExternalStanding[]> {
        const params = new HttpParams({
            fromObject: {
                league: leagueId,
                season: new Date().getFullYear()
            }
        })
        return this.httpClient.get<ExternalPayload<ExternalStandingsPayload[]>>(`${environment.footballApiBaseUrl}/standings`, {
            params,
        })
            .pipe(
                map((payload) => payload.response?.[0]?.league?.standings?.[0])
            )
    }

    public getFixtures(teamId: number, leagueId: number): Observable<ExternalFixture[]> {
        const params = new HttpParams({
            fromObject: {
                team: teamId,
                league: leagueId,
                last: 10
            }
        });
        return this.httpClient.get<ExternalPayload<ExternalFixture[]>>(`${environment.footballApiBaseUrl}/fixtures`, {
            params
        })
            .pipe(
                map((payload) => payload?.response)
            )
    }
}
