import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MatSnackBar } from '@angular/material';

import { DeleteDialogComponent } from './delete-dialog.component';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;
  let dialogStub;
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

    TestBed.configureTestingModule({
      declarations: [ DeleteDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: dialogStub },
        { provide: MatSnackBar, useValue: snackBarStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
