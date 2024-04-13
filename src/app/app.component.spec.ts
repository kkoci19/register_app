
// import { Component } from '@angular/core';

// interface Person {
//   name: string;
//   surname: string;
//   status: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//   people: Person[] = [];
//   newPerson: Person = {
//     name: '',
//     surname: '',
//     status: 'present' // default status
//   };

//   addPerson() {
//     if (this.newPerson.name && this.newPerson.surname) {
//       this.people.push({ ...this.newPerson });
//       this.newPerson.name = '';
//       this.newPerson.surname = '';
//     }
//   }

//   deletePerson(index: number) {
//     this.people.splice(index, 1);
//   }
// }

// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have the 'register-app' title`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('register-app');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Hello, register-app');
//   });
// });
