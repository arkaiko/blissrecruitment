import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-look-for-server-health',
  templateUrl: './look-for-server-health.component.html',
  styleUrls: ['./look-for-server-health.component.css']
})

export class LookForServerHealthComponent {

  constructor(private router: Router) { }

  loadingMessage = "";
  dontDisplayThisValue = true;

  dontDisplayThis() {
    return this.dontDisplayThisValue;
  }

  ngOnInit() {
    this.checkForServer();
  }

  checkForServer() {
    var that = this;
    this.loadingMessage = "Checking server health..";
    var request = new XMLHttpRequest();
    request.open('GET', 'https://private-anon-99d310306c-blissrecruitmentapi.apiary-mock.com/health');
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200){
          that.loadingMessage = "Server health: OK!";
          that.dontDisplayThisValue = true;
          that.router.navigate(['listScreen']);
        } else {
          that.loadingMessage = "Server health: NOT OK!";
          that.dontDisplayThisValue = false;
        }
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };
    request.send();
  }
}
