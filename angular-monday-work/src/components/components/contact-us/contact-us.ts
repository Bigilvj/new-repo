import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone:false,
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUs implements OnInit {
  contactInfo: any = {};
  contactReactiveForm: FormGroup;
  
  formData = {
    name: '',
    email: '',
    password: ''
  };
  contact: any={};
 contactVisible = false;
 templateFormVisible=false;
 reactTemplateVisible=false;

  constructor(private service: Service, private fb: FormBuilder) {
    this.contactReactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.contactInfo = this.service.getContact();
  }

  submitForm(form: any) {
    if (form.valid) {
      console.log('Template Form Submitted:', form.value);
    } else {
      console.log('Template Form is invalid');
    }
  }

  submitReactiveForm() {
    if (this.contactReactiveForm.valid) {
      console.log('Reactive Form Submitted:', this.contactReactiveForm.value);
      
    } else {
      console.log('Reactive Form is invalid');
    }
  }
  showcontact() {
    this.contactInfo = this.service.getContact();
    this.contactVisible = true;
    this.templateFormVisible = false; 
  }

  showTemplate() {
    this.templateFormVisible = true;
    this.contactVisible = false; 
    console.log("template");
  }
  showReactive() {
  this.templateFormVisible = false;
  this.contactVisible = false;
  this.reactTemplateVisible=true;
}

}

