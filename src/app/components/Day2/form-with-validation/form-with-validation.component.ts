import { Component } from '@angular/core';
interface Student {
  name: string;
  age: number;
  address: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrls: ['./form-with-validation.component.css']
})
export class FormWithValidationComponent {
  name: string ='';
  age: number= 0;
  address: string ='';
  phoneNumber: string = '';

  students: Student[] = [];

  addStudent() {
    if (this.nameValidation && this.ageValidation && this.addressValidation && this.phoneNumberValidation) {
      const student: Student = {
        name: this.name,
        age: this.age,
        address: this.address,
        phoneNumber: this.phoneNumber
      };

      this.students.push(student);
      console.log('Student added:', student);

      // Clear form fields after submission
      this.name = '';
      this.age = 0;
      this.address = '';
      this.phoneNumber = '';
    }
  }

  SendValues(e: Event){
    e.preventDefault();
    if(this.nameValidation && this.ageValidation){
      console.log(this.name, this.age);
    }
  }
  get nameValidation(){
    return this.name.length >=5;
  }
  get ageValidation(){
    return this.age >= 10 && this.age <=17;
  }
  get nameTouched(){
    return this.name!='';
  }
  get ageTouched(){
    return this.age>0;
  }
  get addressValidation(){
    return this.address.length >=5;
  }
  get addressTouched(){
    return this.address!='';
  }

get phoneNumberValidation() {
  return /^(010|012|015)\d{8}$/.test(this.phoneNumber);
}

get phoneNumberTouched() {
  return this.phoneNumber !== '';
}
}
