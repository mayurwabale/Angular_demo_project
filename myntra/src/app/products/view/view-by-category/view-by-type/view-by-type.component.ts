import { Component, OnInit } from '@angular/core';
import { FirebaseService, users } from 'src/app/firebase.service';

@Component({
  selector: 'app-view-by-type',
  templateUrl: './view-by-type.component.html',
  styleUrls: ['./view-by-type.component.css']
})
export class ViewByTypeComponent implements OnInit {

  products!:any;
  constructor(private firestore:FirebaseService
) { }

  ngOnInit(): void {
    this.firestore.getproductsType().subscribe(res => {
      this.products = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as users;
      })
    });

  }

  sendProductId(id:any){
    this.firestore.productId=id;
    console.log(id);

  }

}
