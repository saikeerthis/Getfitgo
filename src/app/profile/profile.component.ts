import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public zip1 : any;
  public city1 : any = '';
  public errorMessage : string ='';

  constructor() { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    health: new FormGroup({
      dob: new FormControl(''),
      height:new FormControl(''),
      weight:new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  changeFn(e:any){

    this.city1 = '';
    this.errorMessage = '';
    this.zip1 = e.target.value;
    if( this.zip1 == '30144' || this.zip1 =='30152'){
      this.city1 = 'Kennesaw';
    }
    else if(this.zip1 == '30060'|| this.zip1 == '30061' || this.zip1 =='30062' || this.zip1 =='30063'|| this.zip1 =='30064'
      || this.zip1 =='30065'|| this.zip1 == '30066'|| this.zip1 =='30067'|| this.zip1 =='30068'|| this.zip1 =='30069'){
      this.city1 ='Marietta';

    }
    else if(this.zip1 == '30188' || this.zip1 =='30189'){
      this.city1 = 'Woodstock';
    }
    else
    {
      this.errorMessage = 'Form status INVALID';
    }

  }

}

