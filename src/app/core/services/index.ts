import { UserService } from './user.service';
import { SpinnerService } from './spinner.service';
import { AuthService } from './auth.service';
import { RoutingService } from './routing.service';
import { LoadingService } from './loading.service';
import { SessionService } from './session.service';
import { GroupsService } from './groups.service';
import { QuestionsService } from './questions.service';
import { ContactsService } from './contacts.service';


export {
  UserService,
  SpinnerService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService,
  QuestionsService,
  GroupsService,
  ContactsService
};

// an array of services
export const APP_SERVICE_PROVIDERS = [
  UserService,
  SpinnerService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService,
  QuestionsService,
  GroupsService,
  ContactsService
];