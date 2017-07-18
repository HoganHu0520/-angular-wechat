import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { WechatConfig, WECHAT_CONFIGURATION } from './config';

@Injectable()
export class WechatService {
  constructor(@Inject(WECHAT_CONFIGURATION) private config: WechatConfig, private http: Http) {
    console.log(config);
  }

  getToken() {

  }
}