import {Component} from '@angular/core';
import {CountryNavigationComponent} from "../leaderboard/components/country-navigation/country-navigation.component";
import {StandingsTableComponent} from "../leaderboard/components/standings-table/standings-table.component";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {AsyncPipe} from "@angular/common";

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
  constructor(public activateRouteSnapshot: ActivatedRoute) {
  }

  public standings$ = this.activateRouteSnapshot.data.pipe(
    map((data) => data['standings'])
  );
}
