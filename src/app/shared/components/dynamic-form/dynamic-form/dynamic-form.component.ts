import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formFields: FormField<string>[] = [];
  formGroup!: FormGroup;
  formValues = '';

  constructor(private formfieldService: FormfieldControlService) {}

  ngOnInit(): void {
    this.formGroup = this.formfieldService.toFormGroup(this.formFields);
  }

  onSubmit() {
    this.formValues = JSON.stringify(this.formGroup.getRawValue());
  }
}
