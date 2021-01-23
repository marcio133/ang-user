import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EditFormComponent } from './edit-form.component';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let dialogStub;
  let dialogDataStub;
  let snackBarStub;

  beforeEach(async(() => {
    dialogStub = {
      close: function () {
        return false;
      },
    };
    snackBarStub = {
      open: function () {
        return false;
      },
    };
    dialogDataStub = {};

    TestBed.configureTestingModule({
      declarations: [ EditFormComponent ],
      imports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogStub },
        { provide: MatSnackBar, useValue: snackBarStub },
        { provide: MAT_DIALOG_DATA, useValue: dialogDataStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
