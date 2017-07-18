import {NgModule, ModuleWithProviders} from '@angular/core';
import {HttpModule} from '@angular/http';

import {WechatConfig, WECHAT_CONFIGURATION} from './config';
import {WechatService} from './service';


@NgModule({
  imports: [
    HttpModule,
  ]
})
export class AngularWechatModule {
  static forRoot(config?: WechatConfig): ModuleWithProviders {
    return {
      ngModule: AngularWechatModule,
      providers: [
        {provide: WECHAT_CONFIGURATION, useValue: config ? config : {}},
        WechatService
      ]
    }
  }
}