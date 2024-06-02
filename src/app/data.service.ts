import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private afs:AngularFirestore) { }

  addstudent(student:Student){
    student.id=this.afs.createId()
    return this.afs.collection('/Students').add(student)
  }

  getallstudents(uuid:string | null){
    

    return this.afs.collection('/Students',ref=>ref.where("uid","==",uuid)).snapshotChanges()
    
    
  }

  deletestudent(student:Student){
    return this.afs.collection('/Students').doc(student.id).delete()
  }

  updatestudent(student:Student){
    
  }

}
