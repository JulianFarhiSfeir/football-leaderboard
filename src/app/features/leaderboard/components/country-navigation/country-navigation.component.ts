import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FootballApiService} from "../../../../core/football-api.service";

@Component({
    selector: 'app-country-navigation',
    templateUrl: './country-navigation.component.html',
    styleUrls: ['./country-navigation.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class CountryNavigationComponent {
    public countries = FootballApiService.leaguesCountriesCollection;
}
