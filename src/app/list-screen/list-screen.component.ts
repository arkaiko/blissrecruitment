import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css']
})
export class ListScreenComponent implements OnInit {

  questions = [];
  searchTerms ="";
  dontDisplayThisValue = true;

  constructor(private http: Http) {}

  dontDisplayThis() {
    return this.dontDisplayThisValue;
  }

  ngOnInit() {
    this.questions = [];
    this.fetchData(10, 10, "");
  }

  searchRecords() {
    this.questions = [];
    this.fetchData(10, 10, this.searchTerms);
    this.dontDisplayThisValue = false;
  }

  fetchData(limit, offset, filter) {
    this.http.get('https://private-anon-99d310306c-blissrecruitmentapi.apiary-mock.com/questions?limit='+limit+'&offset='+offset+'&filter='+filter)
      .map(res => res.json())
      .subscribe(questions => this.questions = questions);
  }

  dismissFilter() {
    this.questions = [];
    this.fetchData(10, 10,"");
    this.dontDisplayThisValue = true;
    this.searchTerms = "";
  }
}
