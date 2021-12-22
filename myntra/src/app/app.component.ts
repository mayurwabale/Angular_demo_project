import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService, users } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myntra';


  


  constructor(private firebaseserv:FirebaseService, private fb:FormBuilder){}

  
  
}

