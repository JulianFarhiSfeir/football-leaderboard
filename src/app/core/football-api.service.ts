import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {ExternalFixture, ExternalStanding} from "./football-api.typings";

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  constructor(private httpClient: HttpClient) {
  }

  public getLeague(leagueId: number) {
    return this.httpClient.get(`${environment.footballApiBaseUrl}/leagues`, {
      params: new HttpParams({
        fromObject: {
          id: leagueId,
        }
      })
    })
  }

  public getStanding(leagueId: number): Observable<ExternalStanding[]> {
    // todo type any
    return this.httpClient.get<{response: {league: {standings: Array<ExternalStanding[]>}}[]}>(`${environment.footballApiBaseUrl}/standings`, {
      params: new HttpParams({
        fromObject: {
          league: leagueId,
          season: new Date().getFullYear()
        }
      }),
    })
      .pipe(
        // todo
        map((payload) => payload.response[0].league.standings[0])
      )
  }

  public getFixtures(teamId: number): Observable<ExternalFixture[]> {
    return this.httpClient.get<{ response: ExternalFixture[] }>(`${environment.footballApiBaseUrl}/fixtures`, {
      params: new HttpParams({
        fromObject: {
          team: teamId,
          last: 10
        }
      }),
    })
      .pipe(
        // todo
        map((payload) => payload.response)
      )
  }
}
