import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}. The time is {{time}}.</div>`,
})
export class AppComponent {
  value = 'World';
  time = new Date();
}
