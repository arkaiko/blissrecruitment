import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitorize-connection',
  templateUrl: './monitorize-connection.component.html',
  styleUrls: ['./monitorize-connection.component.css']
})
export class MonitorizeConnectionComponent implements OnInit {

  constructor() { }
  hide_flag = true;

  public onlineFlag = navigator.onLine;

  hideThis() {
    return this.hide_flag;
  }

  ngOnInit() {
    var that = this;
    setInterval(function(){
      this.onlineFlag = navigator.onLine;
      if (navigator.onLine === false){
        that.hide_flag = false;
        that.hideThis();
      } else {
        that.hide_flag = true;
        that.hideThis();
      }
    }, 1000)
  }

}
