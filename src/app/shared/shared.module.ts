import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IterablePipe } from "./pipes/iterable/iterable.pipe";
// import * as directives from "./index";

let directivesArr = [
];


let pipesArr = [
  IterablePipe,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...directivesArr,
    ...pipesArr
  ],
  exports: [
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