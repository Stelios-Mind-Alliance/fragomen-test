import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { FormService } from 'src/app/services/form.service';
import { UploadService } from 'src/app/services/upload.service';

export interface User {
  name: string;
}

@Component({
  selector: 'iams-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss'],
})
export class FormCreateComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  files = [];
  list: any[];

  panelOpenState = false;
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  states: any[] = [
    {
      name: 'Arkansas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  constructor(
    public formService: FormService,
    private uploadService: UploadService
  ) {
    this.list = [
      { name: 'Business Travelers', checked: false },
      { name: 'Intracompany Transferees', checked: false },
      { name: 'Short-term Assignees', checked: false },
      { name: 'Long-term Assignees', checked: false },
      { name: 'Dependents', checked: false },
      { name: 'Students', checked: false },
      { name: 'Permanent Residence', checked: false },
      { name: 'Citizenship', checked: false },
      { name: 'Other', checked: false },
    ];
  }

  ngOnInit() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this.filterStates(state) : this.states.slice()))
    );
  }

  filterStates(name: string) {
    return this.states.filter(
      state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService
      .upload(formData)
      .pipe(
        map(event => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              file.progress = Math.round((event.loaded * 100) / event.total);
              break;
            case HttpEventType.Response:
              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          file.inProgress = false;
          return of(`${file.data.name} upload failed.`);
        })
      )
      .subscribe((event: any) => {
        if (typeof event === 'object') {
          console.log(event.body);
        }
      });
  }
  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  onFileUpload() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  shareCheckedList(item: any[]) {
    console.log(item);
  }
  shareIndividualCheckedList(item: {}) {
    console.log(item);
  }

  onAddForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.formService.addForm(
      form.value.description,
      form.value.state,
      form.value.impact,
      form.value.formStatus,
      form.value.announcementDesc,
      form.value.announcementUrl,
      form.value.effectiveDate,
      form.value.alertRequest,
      form.value.govAgency,
      form.value.alertRef
    );
    console.log('LOG FORM=>', form.value);
    form.resetForm();
  }
}
