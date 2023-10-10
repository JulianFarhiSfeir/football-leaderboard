import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FixturesTableComponent} from './fixtures-table.component';

describe('FixturesTableComponent', () => {
    let component: FixturesTableComponent;
    let fixture: ComponentFixture<FixturesTableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FixturesTableComponent]
        });
        fixture = TestBed.createComponent(FixturesTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
