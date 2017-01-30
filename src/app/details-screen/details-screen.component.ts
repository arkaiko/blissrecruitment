import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { URLSearchParams, } from '@angular/http';

@Component({
  selector: 'app-details-screen',
  templateUrl: './details-screen.component.html',
  styleUrls: ['./details-screen.component.css']
})
export class DetailsScreenComponent implements OnInit {

  question_id = 0;
  question = {};

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
          this.question_id = params['question_id'];
          this.fetchData(this.question_id);
      });
  }

  fetchData(question_id) {
    this.http.get('https://private-anon-99d310306c-blissrecruitmentapi.apiary-mock.com/questions/'+question_id)
      .map(res => res.json())
      .subscribe(questions => this.question = questions);
  }
}
