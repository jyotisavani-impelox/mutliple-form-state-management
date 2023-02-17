import { Component, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form/dynamic-form.component';
import { FormField } from 'src/app/shared/components/dynamic-form/form-field';
import { FormfieldControlService } from 'src/app/shared/components/dynamic-form/formfield-control.service';
import {
  RxjsStateService,
  StepOption,
} from 'src/app/shared/services/rxjs-state.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent {
  @ViewChild('dynamicForm') formComponent!: DynamicFormComponent;
  formFields: FormField<any>[];
  constructor(
    service: FormfieldControlService,
    private rxJsState: RxjsStateService
  ) {
    this.formFields = service.getStepTwoFields();
  }

  ngAfterViewInit(): void {
    this.rxJsState.setSelectedState(StepOption.STEP_TWO);
    this.rxJsState.initForm(StepOption.STEP_TWO, this.formComponent.formGroup);
  }
}
