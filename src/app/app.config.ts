import { InjectionToken } from '@angular/core';
 //import { environment } from '../environments/environment';

import { CustomConfig } from 'ng2-ui-auth';

export let APP_CONFIG = new InjectionToken<string>('app.config');

export interface AppConfig {
  apiEndpoint: string,
  socketUrl: string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: "http://localhost:33001/api", //"http://api.rewala.2muchcoffee.com/api",
  socketUrl: "//localhost:33001"
};

export const GOOGLE_CLIENT_ID = '945919728141-s8e4e961ie6jgi5hbuuvedv7vo1u40n5.apps.googleusercontent.com';
export const FACEBOOK_CLIENT_ID = '656768837864102';
export const TWITTER_CLIENT_ID = '9weFaB38ZA8ibRyl1AVRzMfwP';
export const LINKEDIN_CLIENT_ID = '862dbq7eltvyqn';
export const GITHUB_CLIENT_ID = '63cfdfe91b8b05477ac2';

export class SOCIAL_AUTH_CONFIG extends CustomConfig {
  baseUrl = APP_DI_CONFIG.apiEndpoint;
  defaultHeaders = {'Content-Type': 'application/json'};
  providers = {
    google: {
      clientId: GOOGLE_CLIENT_ID,
      url: '/api/clients/auth-google',
      optionalUrlParams: ['access_type'],
      accessType: 'offline'
    },
    facebook: {
      clientId: FACEBOOK_CLIENT_ID,
      url: '/api/clients/auth-facebook',
    },
    github: {
      clientId: GITHUB_CLIENT_ID,
      url: '/api/clients/auth-github',
    },
    linkedin: {
      clientId: LINKEDIN_CLIENT_ID,
      url: '/api/clients/auth-linkedin',
    },
    twitter: {
      clientId: TWITTER_CLIENT_ID,
      url: '/api/clients/auth-twitter',
    },
  };
}

export function RESTANGULAR_CONFIG (
    RestangularProvider,
    ToastService,
    SessionService
) {
  RestangularProvider.setBaseUrl(APP_DI_CONFIG.apiEndpoint);
  
   RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
     return {
       params: Object.assign({}, params, {access_token: SessionService.getCurrentToken()}),
       headers: headers
     };
   });
   
  RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
    let errorMsg = response.statusText;
    if (response.data.error.message) {
      errorMsg = response.data.error.message;
    }
    ToastService.presentToast(errorMsg);
  });

}
