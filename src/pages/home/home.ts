import { AddTaskPage } from './../add-task/add-task';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  addTask(){
    this.navCtrl.push(AddTaskPage);
  }
}
