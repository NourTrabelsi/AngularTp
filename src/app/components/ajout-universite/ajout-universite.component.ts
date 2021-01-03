import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-universite',
  templateUrl: './ajout-universite.component.html',
  styleUrls: ['./ajout-universite.component.css']
})
export class AjoutUniversiteComponent implements OnInit {


  public addInstitutForm: FormGroup
 

  constructor(fb: FormBuilder, private http: HttpClient, private router: Router) {

    let addInstitutControls = {

      name: new FormControl("", [
        Validators.required
      ]),
      url: new FormControl("", [
        Validators.required
      ]),
      image: new FormControl("", [
        Validators.required
      ]),
      description: new FormControl("", [
        Validators.required
      ]),
      localisation: new FormControl("", [
        Validators.required
      ]),
      prix: new FormControl("", [
        Validators.required
      ]),

    }

    this.addInstitutForm = fb.group(addInstitutControls)

  }

  ngOnInit(): void {

   
  }

  public addInstitut(): void 
  {

    let data = this.addInstitutForm.value
    this.http.post<any>("http://university2021.pythonanywhere.com/api/v2/university", data)
      .subscribe(
        result => {
          this.router.navigateByUrl('/gestionUniversite')
        },
        error => {
          console.log(error);
          console.log("ERROR add product");
        }
      )


  }




}
