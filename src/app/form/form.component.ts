import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.uid=localStorage.getItem('token')
    console.log("token -",this.uid)
  }

  resetform(){
    this.id=""
    this.name=""
    this.email=""
    this.number=""
  }
  addstudent(){
    this.studentobj.uid=this.uid
    this.studentobj.id=this.id,
    this.studentobj.name=this.name,
    this.studentobj.email=this.email,
    this.studentobj.number=this.number
    this.data.addstudent(this.studentobj)
  }
  onsubmit(){
    this.addstudent()
    this.resetform()
  }

}
