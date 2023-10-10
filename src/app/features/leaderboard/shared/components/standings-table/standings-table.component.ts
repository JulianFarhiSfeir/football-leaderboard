import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Standing} from "./standings-table.typings";

@Component({
    selector: 'app-standings-table',
    templateUrl: './standings-table.component.html',
    styleUrls: ['./standings-table.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class StandingsTableComponent {
    @Input()
    public standings: Standing[] = [];
}
