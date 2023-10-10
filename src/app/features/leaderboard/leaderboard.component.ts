import {Component} from '@angular/core';
import {StandingsTableComponent} from "./shared/components/standings-table/standings-table.component";
import {CountryNavigationComponent} from "./shared/components/country-navigation/country-navigation.component";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss'],
    standalone: true,
    imports: [CommonModule, CountryNavigationComponent, StandingsTableComponent, RouterOutlet]
})
export class LeaderboardComponent {

}
