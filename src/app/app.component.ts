import { Component } from '@angular/core';
import{ToDo} from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'Routing demo';
  public list=[];
  public task='';
  addtask()
  {
    if(this.task!='')
    {
    const newItem:ToDo={
      id:Date.now(),
      value:this.task,
    }
    this.list.push(newItem);
    }
  this.task='';
  }
  deltask(id:number)
  {
    this.list=this.list.filter(item=> item.id!=id);
  }
}
