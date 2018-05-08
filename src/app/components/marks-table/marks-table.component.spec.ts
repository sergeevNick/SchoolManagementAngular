import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTableComponent } from './marks-table.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MarkService } from '../../services/data-services/mark/mark.service';
import { DataLoaderService } from '../../services/data-services/data-loader/data-loader.service';
import { JournalService } from '../../services/app-services/journal.service';

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
                DataLoaderService,
                MarkService,
                JournalService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MarksTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create marks-table-component', () => {
        expect(component).toBeDefined();
    });
});
