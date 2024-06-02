import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { DataService } from '../data.service';
import { Student } from '../model/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  uid:string|null=""
  id:string=""
  name!:string
  email!:string
  number!:string
  studentslist :Student[]=[]

  constructor(private auth:AuthserviceService,private data:DataService,private router :Router) { }

  ngOnInit(): void {
    this.uid=localStorage.getItem('token')
    console.log("token -",this.uid)
    this.getallstudents()
  }

  add(){
    this.router.navigate(['/form'])
  }
  

  getallstudents(){
    this.data.getallstudents(this.uid).subscribe(res=>{
      this.studentslist=res.map((e:any)=>{
        const data=e.payload.doc.data();
        data.id=e.payload.doc.id;
        return data
      })
    },err=>{
      console.log("error while fetching- ",err)
    })
  }

  

  

  delete(student:Student){
    this.data.deletestudent(student)
  }



}
