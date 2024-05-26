import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-com',
  template: `
  <h1>A Start</h1>
  <mat-radio-group>
        <mat-radio-button>
            {{ "test" }}
        </mat-radio-button>
    </mat-radio-group>
    {{ a | bpipe : 5 }}
    <h1>A End</h1>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class AComponent {
  @Input() name: string;
  a: number = 10;
}
