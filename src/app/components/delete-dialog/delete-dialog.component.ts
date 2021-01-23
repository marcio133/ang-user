import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close(false);
  }

  onConfirmClick() {
    this.snackBar.open('User was successfully deleted.', 'Dismiss', {
      duration: 5000,
    });

    this.dialogRef.close(true);
  }

}
