import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormField } from './form-field';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  toFormGroup(inputs: FormField<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach((input) => {
      let validator: ValidatorFn[] = input.required
        ? [Validators.required]
        : [];
      switch (input.validator) {
        case 'email':
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.key] =
        validator.length > 0
          ? new FormControl(input.value || '', validator)
          : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  getFormFields() {
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'textbox',
        key: 'name',
        label: 'Name',
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'textbox',
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validator: 'email',
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'country',
        label: 'Country',
        options: [
          { key: 'usa', value: 'United States of America' },
          { key: 'br', value: 'Brazil' },
          { key: 'other', value: 'Other' },
        ],
        order: 3,
      }),

      new FormField<string>({
        controlType: 'radio',
        key: 'sex',
        label: 'Sex',
        type: 'radio',
        options: [
          { key: 'male', value: 'Male' },
          { key: 'female', value: 'Female' },
        ],
        order: 4,
      }),

      new FormField<string>({
        controlType: 'textarea',
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        order: 5,
      }),
      new FormField<string>({
        controlType: 'checkbox',
        key: 'agree',
        label: 'I accept terms and services',
        type: 'checkbox',
        required: true,
        order: 6,
      }),
    ];

    return inputs;
    // return inputs.sort((a, b) => a.order - b.order);
  }

  getStepTwoFields() {
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'textbox',
        key: 'firstname',
        label: 'First Name',
        required: true,
        order: 1,
      }),
      new FormField<string>({
        controlType: 'textbox',
        key: 'lastname',
        label: 'LastName',
        required: true,
        order: 2,
      }),
      new FormField<string>({
        controlType: 'textbox',
        key: 'organization',
        label: 'Organization',
        required: true,
        order: 2,
      }),
    ];
    return inputs;
  }

  getCompanyFields(companyId: string) {
    if (companyId === 'comA') {
    } else {
    }
  }
}
