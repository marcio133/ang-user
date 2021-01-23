import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/models/user.model';

const urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  userForm: any;

  constructor(
    public dialogRef: MatDialogRef<EditFormComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
      }),
      phone: new FormControl(''),
      website: new FormControl('', Validators.pattern(urlReg)),
    });

    this.userForm.patchValue(this.data);
  }

  onSubmit() {
    this.snackBar.open('User was successfully updated.', 'Dismiss', {
      duration: 5000,
    });

    this.dialogRef.close(this.userForm.value);
  }

}
