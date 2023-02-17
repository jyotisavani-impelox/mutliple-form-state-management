import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form/dynamic-form.component';
import { FormField } from 'src/app/shared/components/dynamic-form/form-field';
import { FormfieldControlService } from 'src/app/shared/components/dynamic-form/formfield-control.service';
import {
  RxjsStateService,
  StepOption,
} from 'src/app/shared/services/rxjs-state.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements AfterViewInit {
  @ViewChild('dynamicForm') formComponent!: DynamicFormComponent;
  formFields: FormField<any>[];
  constructor(
    service: FormfieldControlService,
    private rxJsState: RxjsStateService
  ) {
    this.formFields = service.getFormFields();
  }

  ngAfterViewInit(): void {
    this.rxJsState.setSelectedState(StepOption.STEP_ONE);
    this.rxJsState.initForm(StepOption.STEP_ONE, this.formComponent.formGroup);
  }
}
