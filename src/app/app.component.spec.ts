import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataLoaderService } from './services/data-loader.service';
import { MarkService } from './services/mark.service';
import { SubjectService } from './services/subject.service';
import { StudentService } from './services/student.service';
import { GradeService } from './services/grade.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [GradeService,
        StudentService,
        SubjectService,
        MarkService,
        DataLoaderService,
        FormsModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
