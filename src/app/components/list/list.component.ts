import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatSnackBar, MatDialog, MatTable } from '@angular/material';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  columnsToDisplay = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company', 'actions'];
  dataSource: MatTableDataSource<User>;
  isLoading = true;
  hasError = false;

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(
      users => {
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      () => {
        this.hasError = true;
        this.isLoading = false;
        this.snackBar.open('An error has ocorred on loading users', 'Dismiss');
      }
    )
  }

  onClickEdit(user: User) {
    let dialogRef = this.dialog.open(EditFormComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      const userIndex = this.dataSource.data.indexOf(user);
      const users = [... this.dataSource.data];
      users[userIndex] = {
        ...user,
        ...result,
      }
      this.dataSource.data = users;
      this.table.renderRows();
    });
  }

  onClickDelete(user: User) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      const users = [... this.dataSource.data];
      const userIndex = this.dataSource.data.indexOf(user);
      users.splice(userIndex, 1);
      this.dataSource.data = users;
      this.table.renderRows();
    });
  }

}
