import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  products!:any;


  constructor(private firebaseServ:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseServ.getproductsbyid().subscribe(res => {
      this.products=res.data();
    });
  }

  addInCart(prod:any){
    this.firebaseServ.addToCart(prod);
    
  }
}
