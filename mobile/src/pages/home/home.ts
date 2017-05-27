/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   26-05-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-05-2017
*/

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store, Action } from '@ngrx/store'
import { Observable } from 'rxjs/Rx';

import { AppStateI, MainActions, ITodo } from "core";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public user:any;
  public storeInfo:Observable<AppStateI>;

  constructor(
    public navCtrl: NavController,
    private store: Store<any>,
    private mainActions: MainActions
  ) {
    // use the object in the template since it is an observable
    this.storeInfo = this.store.select(state => state)
  }

  ngOnInit():void {
    this.doQuery()
  }

  /* Event Methode */
  addTodo(todoInput:any):void {
    this.store.dispatch(<Action>this.mainActions.create_data( { path: '/todos', params: todoInput.value} ));
    this.clearInput(todoInput);
  }

  toggleComplete(todo:ITodo):void {
    let updated = Object.assign({}, todo)
    updated.isComplete = !updated.isComplete
    this.store.dispatch(<Action>this.mainActions.update_data( { path: '/todos', params: updated} ));
  }

  deleteTodo(todo:any):void {
    console.log(todo)
    this.store.dispatch(<Action>this.mainActions.delete_data( { path: '/todos', params: todo} ));
  }

  navToEdit(todo:any):void {
    console.log('navToEdit-> ', todo)
    // this.navCtrl.push('ItemEditPage', {
    //   id: todo._id,
    //   todo: todo
    // })
  }

  doLogout(){
    this.store.dispatch(<Action>this.mainActions.logout());
  }
  /* Core Methode */
  doQuery():void {
    this.store.dispatch(<Action>this.mainActions.get_data_array('/todos'));
  }

  clearInput(todoInput:any):void{
    todoInput.value = '';
  }
}
