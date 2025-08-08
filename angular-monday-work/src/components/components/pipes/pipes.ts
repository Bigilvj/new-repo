import { Component } from '@angular/core';
import { delay, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss'
})
export class Pipes {
  name='keerthi';
  uppercase='UPPERCASE TO LOWERCASE'
  date=new Date();
  amount=37899;
   time: Observable<string> = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString())
  );
  pi=5778;
  value=5.1234;
   

  messages: { [k: string]: string } = {
    '=0': 'No messages',
    '=1': 'One message',
    'other': '# messages'
  };

  messageCount = 2;


  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};


   user = {
    name: 'Keerthi',
    age: 21,
    mail: 'keerthi.bali2004@gmail.com'
  };


  num=800;
  number=0.87687;

  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'mango'];

  title='this is title pipe';
  title2= 'thiS IS AnguLar2';

}
