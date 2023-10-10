import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-country-navigation',
    templateUrl: './country-navigation.component.html',
    styleUrls: ['./country-navigation.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class CountryNavigationComponent {
    @Input()
    public countries: string[] = [];
}
