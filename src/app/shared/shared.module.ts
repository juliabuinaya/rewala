import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IterablePipe } from "./pipes/iterable/iterable.pipe";
// import * as directives from "./index";
// import { APP_DI_CONFIG } from "../app.config";

let directivesArr = [
];


let pipesArr = [
  IterablePipe,
];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule,
    FormsModule,

    // MaterializeModule,
  ],
  declarations: [
    ...directivesArr,
    ...pipesArr
  ],
  exports: [
    // RouterModule,
    FormsModule,
    CommonModule,

    ...directivesArr,
    ...pipesArr
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class AppSharedModule {
}