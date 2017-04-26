import { UserService } from './user.service';
import { SpinnerService } from './spinner.service';
import { AuthService } from './auth.service';
import { RoutingService } from './routing.service';
import { LoadingService } from './loading.service';
import { SessionService } from './session.service';
import { CreateQuestionService } from './create-question.service';
import { GroupsService } from './groups.service';


export {
  UserService,
  SpinnerService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService,
  CreateQuestionService,
  GroupsService
};

// an array of services
export const APP_SERVICE_PROVIDERS = [
  UserService,
  SpinnerService,
  AuthService,
  RoutingService,
  LoadingService,
  SessionService,
  CreateQuestionService,
  GroupsService
];