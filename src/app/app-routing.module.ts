import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeaderboardComponent} from "./features/leaderboard/leaderboard.component";
import {StandingsTableComponent} from "./features/leaderboard/components/standings-table/standings-table.component";
import {LEADERBOARD_ROUTES} from "./features/leaderboard/leaderboard.routes";

const routes: Routes = [
  {
    path: 'leaderboard',
    loadChildren: () => import('./features/leaderboard/leaderboard.routes').then(r => r.LEADERBOARD_ROUTES)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'leaderboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
