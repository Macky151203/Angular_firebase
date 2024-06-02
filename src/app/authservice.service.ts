import { Injectable } from '@angular/core';
import {GoogleAuthProvider} from '@angular/fire/auth'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }

  signinwithgoogle(){
    this.fireauth.signInWithPopup(new GoogleAuthProvider).then((res)=>{
      this.router.navigate(['/dashboard'])
      localStorage.setItem('token',JSON.stringify(res.user?.uid))
    },err=>{
      console.log(err)
    })
  }
}
