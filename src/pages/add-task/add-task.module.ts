import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { AddTaskPage } from './add-task';

@NgModule({
  declarations: [
    AddTaskPage
  ],
  imports: [
    IonicPageModule.forChild(AddTaskPage),
  ],
})
export class AddTaskPageModule {
 
  
}
