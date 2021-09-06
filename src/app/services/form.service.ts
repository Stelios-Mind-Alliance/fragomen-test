import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Form } from '../models/form.model';

@Injectable({ providedIn: 'root' })
export class FormService {
  private forms: Form[] = [];
  private formsUpdated = new Subject<Form[]>();

  getForms() {
    return [...this.forms];
  }

  getFormUpdateListener() {
    return this.formsUpdated.asObservable();
  }

  addForm(
    description: string,
    state: string,
    impact: string,
    formStatus: string,
    announcementDesc: string,
    announcementUrl: string,
    effectiveDate: Date,
    alertRequest: string,
    govAgency: string,
    alertRef: string[]
  ) {
    const form: Form = {
      description: description,
      state: state,
      impact: impact,
      formStatus: formStatus,
      announcementDesc: announcementDesc,
      announcementUrl: announcementUrl,
      effectiveDate: effectiveDate,
      alertRequest: alertRequest,
      govAgency: govAgency,
      alertRef: alertRef,
    };
    this.forms.push(form);
    this.formsUpdated.next([...this.forms]);
  }
}
