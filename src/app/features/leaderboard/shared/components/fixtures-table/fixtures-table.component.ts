import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Fixture} from "./fixtures-table.typings";

@Component({
    selector: 'app-fixtures-table',
    templateUrl: './fixtures-table.component.html',
    styleUrls: ['./fixtures-table.component.scss'],
    standalone: true,
    imports: [CommonModule, NgOptimizedImage]
})
export class FixturesTableComponent {
    @Input()
    public fixtures: Fixture[] = [];

}
