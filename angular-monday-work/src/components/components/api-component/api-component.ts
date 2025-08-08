import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-component',
  standalone: false,
  templateUrl: './api-component.html',
  styleUrl: './api-component.scss'
})
export class ApiComponent {
  users: any;
  usersPut: any;
  usersPost: any;

  showGet = false;
  showPut = false;
  showPost = false;
  postResult: any;

  constructor(private http: HttpClient) {}

  showGetResult() {
    console.log('GET method called!');
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      this.users = response;
      this.showGet = true;
      this.showPut = false;
      this.showPost = false;
    });
  }

  showPutResult() {
    console.log('PUT method called!');
    const updatedData = {
      name: 'Keerthi Bali',
      userName: 'keerthi_bali',
      email: 'keerthi.bali2004@gmail.com',
      age: 21,
      mobile: 9652212707,
    };

    this.http.put('https://jsonplaceholder.typicode.com/users/1', updatedData).subscribe((response) => {
      this.usersPut = [response];
      console.log(response);
      this.showGet = false;
      this.showPut = true;
      this.showPost = false;
    });
  }
showPostResult() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Post response:', data); // 
    this.postResult = data;
    this.showGet = false;
      this.showPut = false;
      this.showPost = true;
  })
  .catch(error => console.error('Error:', error));
}


  showIframe = true;

  closeIframe() {
    this.showIframe = false;
  }
}

