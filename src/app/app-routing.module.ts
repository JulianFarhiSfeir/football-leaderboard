import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'leaderboard',
        loadChildren: () => import('./features/leaderboard/leaderboard.routes').then(r => r.LEADERBOARD_ROUTES)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'leaderboard'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
