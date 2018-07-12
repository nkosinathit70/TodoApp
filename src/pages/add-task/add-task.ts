import { ViewTaskPage } from './../view-task/view-task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TASK } from "./../../mocks/Task.mocks";

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  task:string;
  _name:string;
  _date:string;

  taskList = TASK;

  weekDays:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  
    

  
  
  addMyTask(){
   
    

    this.taskList.push({name:this._name,date:this._date,task:this.task});
    
    this.navCtrl.setRoot(ViewTaskPage);
    
  }

}
