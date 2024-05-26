import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AModule } from '../../src/components/a/a.module';
import { BModule } from '../../src/components/b/b.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AModule, BModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
