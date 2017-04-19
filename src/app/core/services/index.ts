import { UserService } from './user.service';
import { SpinnerService } from './spinner.service';
import { AuthService } from './auth.service';
import { RoutingService } from './routing.service';
import { LoadingService } from './loading.service';
import { SessionService } from './session.service';


export {
  UserService,
  SpinnerService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService
};

// an array of services to resolve routes with data
export const APP_SERVICE_PROVIDERS = [
  UserService,
  SpinnerService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService
];