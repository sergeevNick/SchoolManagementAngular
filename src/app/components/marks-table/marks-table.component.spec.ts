import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTableComponent } from './marks-table.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MarkService } from '../../services/mark/mark.service';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

describe('MarksTableComponent', () => {
    let component: MarksTableComponent;
    let fixture: ComponentFixture<MarksTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MarksTableComponent],
            imports: [
                BrowserModule,
                HttpClientModule,
                CommonModule,
                FormsModule
            ],
            providers: [
                MarkService,
                DataLoaderService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MarksTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('should create marks-table-component', () => {
        expect(component).toBeDefined();
    });
});
