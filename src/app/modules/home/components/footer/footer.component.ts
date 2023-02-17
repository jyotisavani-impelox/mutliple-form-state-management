import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  RxjsStateService,
  StepOption,
} from 'src/app/shared/services/rxjs-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  constructor(private rxjsState: RxjsStateService, private router: Router) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.rxjsState.selecetedState) {
      console.log(this.rxjsState?.form?.value);
    }
  }

  submit() {
    console.log(this.rxjsState.form?.getValue().valid);

    if (this.rxjsState.selecetedState === StepOption.STEP_ONE) {
      this.router.navigate(['/step-two']);
    }
  }

  get valid() {
    return this.rxjsState.form?.getValue().valid;
  }
}
