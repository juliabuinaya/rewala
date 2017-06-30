import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { RoutingService } from './routing.service';
import { LoadingService } from './loading.service';
import { SessionService } from './session.service';
import { GroupsService } from './groups.service';
import { QuestionsService } from './questions.service';
import { ContactsService } from './contacts.service';
import { OptionsService } from './options.service';
import { AnswersService } from './answers.service';
import { ToastService } from './toast.service';


export {
  UserService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService,
  QuestionsService,
  GroupsService,
  ContactsService,
  OptionsService,
  AnswersService,
  ToastService
};

// an array of services
export const APP_SERVICE_PROVIDERS = [
  UserService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService,
  QuestionsService,
  GroupsService,
  ContactsService,
  OptionsService,
  AnswersService,
  ToastService
];