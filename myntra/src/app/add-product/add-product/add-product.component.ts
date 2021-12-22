import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public userForm!: FormGroup;

  constructor(private firestore:FirebaseService,
    private fb:FormBuilder,
    private router:Router) {
      this.userForm=this.fb.group({
       
        name:[''],
        type:[''],
        image_url:[''],
        desc:[''],
        productCategory:[''],
        price:[''],
        vendor:[''],
      })
     }

  ngOnInit(): void {
  }

  onSubmit(){
    this.firestore.createUser(this.userForm.value);
    this.router.navigate(['']);
  }

}
