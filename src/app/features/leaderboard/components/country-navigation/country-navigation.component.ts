import {Component} from '@angular/core';
import {Countries} from "../../../../core/countries";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-country-navigation',
  templateUrl: './country-navigation.component.html',
  styleUrls: ['./country-navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CountryNavigationComponent {
  public countries = Countries
}
