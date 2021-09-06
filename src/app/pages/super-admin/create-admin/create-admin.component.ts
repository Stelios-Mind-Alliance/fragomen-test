import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Admin } from './admin.model';

@Component({
  selector: 'iams-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss'],
})
export class CreateAdminComponent implements OnInit {
  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CreateAdminComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Admin;
    }

    this.form = this.fb.group({
      id: [CreateAdminComponent.id++],
      firstName: [this.defaults.firstName || ''],
      lastName: [this.defaults.lastName || ''],
      email: this.defaults.email || '',
      userRole: this.defaults.userRole || '',
      phoneNumber: this.defaults.phoneNumber || '',
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createAdmin();
    } else if (this.mode === 'update') {
      this.updateAdmin();
    }
  }

  createAdmin() {
    const admin = this.form.value;
    this.dialogRef.close(admin);
  }

  updateAdmin() {
    const admin = this.form.value;
    admin.id = this.defaults.id;

    this.dialogRef.close(admin);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
