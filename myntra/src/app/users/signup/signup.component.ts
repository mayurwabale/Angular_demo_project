import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isSignedIn = false;
  constructor(private firesbaseServ:FirebaseService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!=null) {
      this.isSignedIn = true;
    }
    else
    this.isSignedIn = false;
  }

 async onSignUp(email:any,pass:any){

  await this.firesbaseServ.signUp(email,pass);
  if(this.firesbaseServ.isLoggedIn)
  this.isSignedIn=true;
  this.router.navigate(['/']);
  }

}
