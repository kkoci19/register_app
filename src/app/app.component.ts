import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'register-app';
  value: string = '';
  value1: string = '';
  value2: boolean = false;
  allRegistered: Array<REGISTER> = [];


  addRegister() {
    if (this.value.trim() == '') {
      return;
    }
    if (this.value1.trim() == '') {
      return;

    }

    var newValue: REGISTER = {
      name: this.value,
      lastName: this.value1,
      presence: this.value2,

    }

    this.allRegistered.push(newValue)
    this.value = '',
      this.value1 = '',
      this.value2 = false;

  }

  deletePerson(i:number) {
    this.allRegistered.splice(i,1);
  }

}
interface REGISTER {
  name: string;
  lastName: string;
  presence: boolean;

}
