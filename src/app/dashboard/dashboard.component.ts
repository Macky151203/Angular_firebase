import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { DataService } from '../data.service';
import { Student } from '../model/student';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentobj:Student = {
    uid:'',
    id: '',
    name: '',
    email: '',
    number: ''
  }
  uid:string|null=""
  id:string=""
  name!:string
  email!:string
  number!:string
  studentslist :Student[]=[]

  constructor(private auth:AuthserviceService,private data:DataService) { }

  ngOnInit(): void {
    this.uid=localStorage.getItem('token')
    console.log("token -",this.uid)
    this.getallstudents()
  }

  resetform(){
    this.id=""
    this.name=""
    this.email=""
    this.number=""
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

  onsubmit(){
    this.addstudent()
    this.resetform()
  }

  addstudent(){
    this.studentobj.uid=this.uid
    this.studentobj.id=this.id,
    this.studentobj.name=this.name,
    this.studentobj.email=this.email,
    this.studentobj.number=this.number
    this.data.addstudent(this.studentobj)
  }

  delete(student:Student){
    this.data.deletestudent(student)
  }



}
