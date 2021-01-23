import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule, MatTableModule, MatButtonModule, MatIconModule, MatDialog, MatSnackBar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from '../loading/loading.component';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let dialogStub;
  let snackBarStub;

  beforeEach(async(() => {
    dialogStub = {
      open: function () {
        return false;
      },
    };
    snackBarStub = {
      open: function () {
        return false;
      },
    };

    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        LoadingComponent,
       ],
      imports: [
        HttpClientModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        NoopAnimationsModule,
        MatButtonModule,
      ],
      providers: [
        { provide: MatDialog, useValue: dialogStub },
        { provide: MatSnackBar, useValue: snackBarStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
