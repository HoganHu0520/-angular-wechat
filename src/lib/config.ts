import { InjectionToken } from '@angular/core';

export interface WechatConfig {
  grantType: string;
  appid: string;
  secret: string;
}

export const WECHAT_CONFIGURATION = new InjectionToken<WechatConfig>('WECHAT_CONFIGURATION');
