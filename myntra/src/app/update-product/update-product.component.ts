import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  editForm!:FormGroup;
  userRef:any;

  constructor(private firestore:FirebaseService,
    private fb:FormBuilder,
    private router:Router,
    private act:ActivatedRoute) {
      this.editForm=this.fb.group({
        email:[''],
        name:[''],
        catid:[''],
        desc:[''],
        price:[''],
        vendor:[''],
      })
     }

  ngOnInit(): void {

    // const id = this.act.snapshot.paramMap.get('id');

    // this.firestore.getStudentDoc(id).subscribe((res:any) => {
    //   this.userRef= res;
    //   this.editForm = this.fb.group({
    //     email:[this.userRef.email],
    //     name:[this.userRef.name]
    //   })
    // })
  }

  onSubmit(): void {

    // const id= this.act.snapshot.paramMap.get('id');
    // this.firestore.updateUser(this.editForm.value,id);
  }

}
