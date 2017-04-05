import { InjectionToken } from '@angular/core';
// import { environment } from '../environments/environment';

import { CustomConfig } from 'ng2-ui-auth';

import { SpinnerService } from './core/services/index';

export let APP_CONFIG = new InjectionToken<string>('app.config');

export interface AppConfig {
  apiEndpoint: string;
}

export const APP_DI_CONFIG: AppConfig = {
  // apiEndpoint: environment.api
  apiEndpoint: "0.0.0.0:53001/api"
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
    spinnerService: SpinnerService
) {
  RestangularProvider.setBaseUrl(APP_DI_CONFIG.apiEndpoint);
  // RestangularProvider.setDefaultHeaders({'X_AUTH_TOKEN': sessionService.get('uptracker_token')});

  // RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
  //   let newHeaders = headers;
  //   // if (urlArr[urlArr.length - 1] != 'streetview')
  //     newHeaders = {
  //       'X_AUTH_TOKEN': sessionService.get('uptracker_token')
  //     };
  //
  //   return {
  //     headers: newHeaders
  //   };
  // });

  // RestangularProvider.addResponseInterceptor((data, operation, what, url, response)=> {
  //   spinnerService.hide();
  //   return data;
  // });

  // RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
  //
  // });

}
