// import { ToasterService } from './toaster.service';
import { UserService } from './user.service';
import { SpinnerService } from './spinner.service';
import { AuthService } from './auth.service';


export {
  // ToasterService,
  UserService,
  SpinnerService,
  AuthService
};

// an array of services to resolve routes with data
export const APP_SERVICE_PROVIDERS = [
  // ToasterService,
  UserService,
  SpinnerService,
  AuthService
];