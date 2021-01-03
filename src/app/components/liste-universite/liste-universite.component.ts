import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-universite',
  templateUrl: './liste-universite.component.html',
  styleUrls: ['./liste-universite.component.css']
})
export class ListeUniversiteComponent implements OnInit {

  public universiteList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("http://university2021.pythonanywhere.com/api/v2/university/all").subscribe(
      result => {
        this.universiteList = result
      },
      error => {
        console.log(error);
      }
    )
  }


  deleteUniversite(universite: any) 
  {
    let indice = this.universiteList.indexOf(universite)
    this.universiteList.splice(indice, 1)

    this.http.delete<any>("http://university2021.pythonanywhere.com/api/v2/university/delete/" + universite.id).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }




}
