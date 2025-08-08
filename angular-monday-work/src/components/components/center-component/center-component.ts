import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
         AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-center-component',
  standalone: false,
  templateUrl: './center-component.html',
  styleUrl: './center-component.scss'
})
export class CenterComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() user: any;
  users:any;
constructor(private http: HttpClient) {} 
   getUsersData() {
    console.log('getUsersData method called!')
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      }
    )

  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


async getPost() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  ngOnInit() {
    this.getPost(); 
  }

}

