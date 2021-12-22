import { Component, OnInit } from '@angular/core';
import { FirebaseService, users } from 'src/app/firebase.service';

@Component({
  selector: 'app-view-by-category',
  templateUrl: './view-by-category.component.html',
  styleUrls: ['./view-by-category.component.css']
})
export class ViewByCategoryComponent implements OnInit {

  products!:users[];
  constructor(private firestore:FirebaseService) { }

  ngOnInit(): void {
    this.firestore.getproductsCategory().subscribe(res => {
      this.products = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as users;
      })
    });
  }

  sendProdType(type: string){
    this.firestore.prodType=type;
  }

}
