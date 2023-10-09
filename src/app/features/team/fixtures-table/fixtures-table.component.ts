import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Fixture} from "./fixtures-table.typings";

@Component({
  selector: 'app-fixtures-table',
  templateUrl: './fixtures-table.component.html',
  styleUrls: ['./fixtures-table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FixturesTableComponent {
  @Input({required: true})
  public fixtures!: Fixture[]

}
