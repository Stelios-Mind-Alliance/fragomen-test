import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Form } from 'src/app/models/form.model';

import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'iams-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  forms: Form[] = [];
  private formSub: Subscription;

  constructor(public formService: FormService) {}

  ngOnInit() {
    this.forms = this.formService.getForms();
    this.formSub = this.formService
      .getFormUpdateListener()
      .subscribe((forms: Form[]) => {
        this.forms = forms;
      });
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
