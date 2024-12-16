import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(form: any): void {
    if (form.valid) {
      console.log('Form Submitted', form.value);
      alert('Login successful!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
