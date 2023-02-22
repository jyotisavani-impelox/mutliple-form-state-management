import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
export enum StepOption {
  STEP_ONE = 'step-one',
  STEP_TWO = 'step-two',
  STEP_THREE = 'step-three',
}
@Injectable({
  providedIn: 'root',
})
export class RxjsStateService {
  public baseState!: {
    [key in StepOption]?: BehaviorSubject<FormGroup>;
  };
  public selecetedState!: StepOption;

  constructor(private router: Router) {}

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

  nextStep(currentState: StepOption) {
    switch (currentState) {
      case StepOption.STEP_ONE:
        this.router.navigate(['/step-two']);
        break;
      case StepOption.STEP_TWO:
        this.router.navigate(['/step-three']);
        break;
      default:
        console.log('no preselected states');
        break;
    }
  }

  previousStep(currentState: StepOption) {
    switch (currentState) {
      case StepOption.STEP_TWO:
        this.router.navigate(['/step-one']);
        break;
      case StepOption.STEP_THREE:
        this.router.navigate(['/step-two']);
        break;
      default:
        console.log('no preselected states');
        break;
    }
  }
}
