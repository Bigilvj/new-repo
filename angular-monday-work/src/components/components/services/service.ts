import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  getContact(){
  
    return {
      Name:'Keerthi',
      Email:'keerthi.bali2004@gmail.com',
      Phone:8099086389
    }
  }
  
}
