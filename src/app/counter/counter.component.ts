import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  countValue = 0;
  counter(type: string) {
    type === 'increment' ? this.countValue++ : this.countValue--
  }
}
