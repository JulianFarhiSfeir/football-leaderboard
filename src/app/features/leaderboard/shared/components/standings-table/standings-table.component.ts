import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import {Standing} from "./standings-table.typings";

@Component({
    selector: 'app-standings-table',
    templateUrl: './standings-table.component.html',
    styleUrls: ['./standings-table.component.scss'],
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterLink]
})
export class StandingsTableComponent {
    @Input()
    public standings: Standing[] = [];
}
