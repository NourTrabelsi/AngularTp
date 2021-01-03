import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-fac',
  templateUrl: './liste-fac.component.html',
  styleUrls: ['./liste-fac.component.css']
})
export class ListeFacComponent implements OnInit {

  public universiteList: any[] = []
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void 
  {
    this.http.get<any>("http://university2021.pythonanywhere.com/api/v2/university/all").subscribe(
      result => {
        this.universiteList = result
      },
      error => {
        console.log(error);
      }
    )
  }

}
