import {Component} from '@angular/core';
import {CountryNavigationComponent} from "../../shared/components/country-navigation/country-navigation.component";
import {StandingsTableComponent} from "../../shared/components/standings-table/standings-table.component";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {FootballApiService} from "../../../../core/api/football-api.service";

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
    imports: [
        CountryNavigationComponent,
        StandingsTableComponent,
        AsyncPipe
    ],
    standalone: true
})
export class CountryComponent {
    public countries: string[] = FootballApiService.countriesLeaguesCollection
        .map((leagueCountry) => leagueCountry.country);
    constructor(public activateRouteSnapshot: ActivatedRoute) {
    }

    public standings$ = this.activateRouteSnapshot.data.pipe(
        map((data) => data?.['standings'])
    );
}
