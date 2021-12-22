import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService, users } from 'src/app/firebase.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  
  userList: users[]=[];


  constructor(private firebaseserv:FirebaseService, private fb:FormBuilder){}

  

  ngOnInit(): void {

    this.firebaseserv.getUsersList().subscribe(res => {
      this.userList = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as users;
      })
    });
  }
  sendProdCat(type: string){
    this.firebaseserv.prodCat=type;
  }

}
