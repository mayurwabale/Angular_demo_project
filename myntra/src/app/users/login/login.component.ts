import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  constructor(private firesbaseServ:FirebaseService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!=null) {
      this.isSignedIn = true;
    }
    else
    this.isSignedIn = false;
  }

 async onSignIn(email:any,pass:any){
  await this.firesbaseServ.signIn(email,pass)
  if(this.firesbaseServ.isLoggedIn)
  this.isSignedIn= true
  this.router.navigate(['/home']);
  }
}
