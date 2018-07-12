import { AddTaskPage } from './../add-task/add-task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TASK } from "./../../mocks/Task.mocks";
/**
 * Generated class for the ViewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-task',
  templateUrl: 'view-task.html',
})
export class ViewTaskPage {
name:string;
date:string;
task:string;
taskList = TASK;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTaskPage');
  }
  addMyTask(){
   
    

    this.taskList.push({name:this.name,date:this.date,task:this.task});
    
    this.navCtrl.setRoot(AddTaskPage);
    
  }
}
