import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
  console.log(this.form.value);
}

}
