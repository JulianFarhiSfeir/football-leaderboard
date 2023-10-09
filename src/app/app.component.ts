import { Component } from '@angular/core';
import {FootballApiService} from "./core/football-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football-leaderboard';
}
