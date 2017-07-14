import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppCompnent } from './app/app';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
  declarations: [
  ],
  entryComponents: [],
  bootstrap: [AppCompnent]
})
export class DemoModule {
  constructor(private injector: Injector) {
  }
}
