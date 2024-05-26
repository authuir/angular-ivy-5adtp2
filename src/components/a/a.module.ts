import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { AComponent } from './a.component';
import { BModule } from '../b/b.module';

@NgModule({
  imports: [BrowserModule, FormsModule, MatRadioModule, BModule],
  declarations: [AComponent],
  exports: [AComponent],
})
export class AModule {}
