import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-life-cycle',
  standalone: false,
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.scss'
})
export class LifeCycle{


  subscription: any;
  setIntervalSub: any;
  inputData: string ='hi';

  observable = new Observable((observer) => {
    observer.next('First Value');
    observer.complete();
  });

  constructor(private http: HttpClient) {}

  ngonitMethiod() {
    console.log('Simulated ngOnInit called');
    this.setIntervalSub = setTimeout(() => {
      console.log('setTimeout Called after 3 seconds');
    }, 3000);
    console.log('Timeout ID:', this.setIntervalSub);
  }

  ngChangeMethiod() {
    const oldValue = this.inputData;
    this.inputData = this.inputData === 'initial' ? 'updated' : 'initial';
    console.log('Simulated ngOnChanges:');
    console.log({
      inputData: {
        previousValue: oldValue,
        currentValue: this.inputData,
        firstChange: false
      }
    });
  }

  ngsetTimeOut() {
    this.setIntervalSub = setTimeout(() => {
      console.log('Independent setTimeout executed');
    }, 2000);
    console.log('Timeout ID:', this.setIntervalSub);
  }

  destroyMethod() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Observable unsubscribed');
    } else {
      console.log('No subscription to unsubscribe');
    }

    clearTimeout(this.setIntervalSub);
    console.log('Timeout cleared');
    console.log('Simulated ngOnDestroy executed');
  }

  ngObservable() {
    this.subscription = this.observable.subscribe({
      next: (value) => console.log('Observable next:', value),
      complete: () => console.log('Observable complete'),
    });
  }




}
