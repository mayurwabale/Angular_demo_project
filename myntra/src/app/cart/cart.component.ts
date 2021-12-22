import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService, users } from '../firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userList: users[]=[];


  constructor(private firebaseserv:FirebaseService, private fb:FormBuilder){}



  ngOnInit(): void {

    this.firebaseserv.getCartData().subscribe(res => {
      this.userList = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as users;
      })
    });
  }

}
