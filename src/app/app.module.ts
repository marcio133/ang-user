import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSortModule } from '@angular/material';

import { ListComponent } from './components/list/list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './utils/phone-mask.directive';
import { PhonePipe } from './utils/phone.pipe';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EditFormComponent,
    ListComponent,
    LoadingComponent,
    PhoneMaskDirective,
    DeleteDialogComponent,
  ],
  entryComponents: [
    EditFormComponent,
    DeleteDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [PhonePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
