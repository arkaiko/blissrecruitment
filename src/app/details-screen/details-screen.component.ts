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
  vote(voteIn) {
    var body = {
      'id': 1,
      'image_url': 'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
      'thumb_url': 'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
      'question': 'Favourite programming language?',
      'choices': [
        {
          'choice': 'Swift',
          'votes': 0
        },
        {
          'choice': 'Python',
          'votes': 0
        },
        {
          'choice': 'Objective-C',
          'votes': 0
        },
        {
          'choice': 'Ruby',
          'votes': 0
        }
      ]
    };

    body.choices[voteIn].votes = 1;

    var request = new XMLHttpRequest();

    request.open('PUT', 'https://private-anon-99d310306c-blissrecruitmentapi.apiary-mock.com/questions/1');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };
    request.send(JSON.stringify(body));
  }
}
