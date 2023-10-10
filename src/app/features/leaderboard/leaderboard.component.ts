import {Component} from '@angular/core';
import {StandingsTableComponent} from "./components/standings-table/standings-table.component";
import {CountryNavigationComponent} from "./components/country-navigation/country-navigation.component";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {Standing} from "./components/standings-table/standings-table.typings";

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss'],
    standalone: true,
    imports: [CommonModule, CountryNavigationComponent, StandingsTableComponent, RouterOutlet]
})
export class LeaderboardComponent {


    constructor() {
    }
}
