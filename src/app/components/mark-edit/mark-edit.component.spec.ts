import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkEditComponent } from './mark-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarkService } from '../../services/mark/mark.service';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

describe('MarkEditComponent', () => {
    let component: MarkEditComponent;
    let fixture: ComponentFixture<MarkEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MarkEditComponent],
            imports: [HttpClientModule,

                FormsModule],
            providers: [
                MarkService,
                DataLoaderService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MarkEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('should create mark-edit-component', () => {
        expect(component).toBeDefined();
    });
});
