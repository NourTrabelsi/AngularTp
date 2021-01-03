import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-universite',
  templateUrl: './modifier-universite.component.html',
  styleUrls: ['./modifier-universite.component.css']
})
export class ModifierUniversiteComponent implements OnInit {
  public universityForm:FormGroup

  id:any
  data:any
  constructor(private route:ActivatedRoute,fb:FormBuilder,private http:HttpClient,private router:Router) { 
    let universityControls ={
      name:new FormControl,
      description:new FormControl,
      image:new FormControl,
      url:new FormControl,
      localisation:new FormControl,
      prix:new FormControl
    }
    this.universityForm=fb.group(universityControls)
  }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.http.get<any>("http://university2021.pythonanywhere.com/api/v2/university/detail/"+this.id).subscribe(
      data=>{
        this.data=data;
       
      }
    )

  }

  public UpdateUniversity(): void {
    let data = this.universityForm.value;
    this.http.put<any>("http://university2021.pythonanywhere.com/api/v2/university/update/"+this.id,data)
    .subscribe(
      result => {
        this.router.navigateByUrl('/gestionUniversite')
      },
      error => {
        console.log(error);
      }
    )
  }
}
