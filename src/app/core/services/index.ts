// import { ToasterService } from './toaster.service';
import { UserService } from './user.service';
import { SpinnerService } from './spinner.service';
// import { ModalWindowService } from './modal-window.service';


export {
  // ToasterService,
  UserService,
  SpinnerService,
  // ModalWindowService
};

// an array of services to resolve routes with data
export const APP_SERVICE_PROVIDERS = [
  // ToasterService,
  UserService,
  SpinnerService,
  // ModalWindowService
];