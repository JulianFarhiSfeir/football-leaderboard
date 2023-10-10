import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {Fixture} from "../../shared/components/fixtures-table/fixtures-table.typings";
import {ActivatedRoute, Data, RouterLink} from "@angular/router";
import {FixturesTableComponent} from "../../shared/components/fixtures-table/fixtures-table.component";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    imports: [
        FixturesTableComponent,
        AsyncPipe,
        RouterLink,
        NgIf
    ],
    standalone: true
})
export class TeamComponent {
    public fixtures$: Observable<Fixture[]> = this.activateRoute.data.pipe(
        map((data: Data) => data['fixtures'] || [])
    )

    public teamName$: Observable<string | null> = this.activateRoute.data.pipe(
        map((data: Data) => data['teamName'])
    )

    constructor(public activateRoute: ActivatedRoute) {
    }
}
