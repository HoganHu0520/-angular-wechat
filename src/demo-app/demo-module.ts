import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularWechatModule, WechatService } from '@angular/wechat';

import { AppCompnent } from './app/app';

@NgModule({
  imports: [
    BrowserModule,
    AngularWechatModule.forRoot({
      grantType: '1',
      appid: '2',
      secret: '3'
    }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    WechatService
  ],
  declarations: [
    AppCompnent
  ],
  entryComponents: [],
  bootstrap: [AppCompnent]
})
export class DemoModule {
  constructor(private injector: Injector, private wechatService: WechatService) {
  }
}
