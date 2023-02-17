import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
export enum StepOption {
  STEP_ONE = 'step-one',
  STEP_TWO = 'step-two',
}
@Injectable({
  providedIn: 'root',
})
export class RxjsStateService {
  public baseState!: {
    [key in StepOption]?: BehaviorSubject<FormGroup>;
  };
  public selecetedState!: StepOption;
  constructor() {}

  initForm(step: StepOption, form: FormGroup) {
    this.baseState = {
      ...this.baseState,
      [step]: new BehaviorSubject(form),
    };
  }

  setSelectedState(step: StepOption) {
    this.selecetedState = step;
  }

  get form(): BehaviorSubject<FormGroup<any>> | undefined {
    return this.baseState[this.selecetedState];
  }
}
