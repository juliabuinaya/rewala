import { IonicModule } from 'ionic-angular';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IterablePipe } from "./pipes/iterable/iterable.pipe";
import { SHARE_COMPONENTS } from './components/index';
// import * as directives from "./index";



let directivesArr = [
];


let pipesArr = [
  IterablePipe,
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...SHARE_COMPONENTS,
    ...directivesArr,
    ...pipesArr
  ],
  exports: [
    FormsModule,
    CommonModule,
    
    ...SHARE_COMPONENTS,
    ...directivesArr,
    ...pipesArr
  ],
  providers: [
  ],
  entryComponents: [
    ...SHARE_COMPONENTS
  ]
})
export class AppSharedModule {
}