import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BPipe } from './b.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, MatRadioModule],
  declarations: [BPipe],
  exports: [BPipe],
})
export class BModule {}
