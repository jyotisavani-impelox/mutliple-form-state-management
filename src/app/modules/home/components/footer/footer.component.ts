import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RxjsStateService } from 'src/app/shared/services/rxjs-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  constructor(private rxjsState: RxjsStateService) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.rxjsState.selectedState) {
      console.log(this.rxjsState?.form?.value);
    }
  }

  submit() {
    this.rxjsState.nextStep(this.rxjsState.selectedState);
  }

  get valid() {
    return this.rxjsState.form?.getValue().valid;
  }

  get selectedState() {
    return this.rxjsState.selectedState;
  }

  back() {
    this.rxjsState.previousStep(this.rxjsState.selectedState);
  }
}
