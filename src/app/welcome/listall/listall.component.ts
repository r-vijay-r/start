import { Component, OnInit } from '@angular/core';
import {
  AngularFireOffline,
  AfoListObservable,
  AfoObjectObservable } from 'angularfire2-offline';
@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  info: AfoObjectObservable<any>;
  items: AfoListObservable<any[]>;
  constructor(afo: AngularFireOffline) {
    this.info = afo.database.object('/info');
    this.items = afo.database.list('/items');
  }
  ngOnInit() {
  }
  add(value){
  	this.items.push({value:value});
  }

}
