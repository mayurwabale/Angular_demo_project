import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  productId:any;
  prodCat:any;
  prodType:any;
  isLoggedIn = false;
  constructor(private firestore:AngularFirestore, private fireBaseAuth:AngularFireAuth) { }

  getStudentDoc(id:string) {
    return this.firestore
    .collection('users')
    .doc(id)
    .valueChanges

  }

  getUsersList(){
    return this.firestore
    .collection('users')
    .snapshotChanges();
  }

 createUser(user:users){
   return new Promise<any>((resolve, reject) => {
     this.firestore
     .collection('users')
     .add(user)
     .then(response=>{console.log(response),(error:any)=>reject(error)
     })
   });
 }

 updateUser(userId:string,payload:users){
  return this.firestore.doc('users/'+userId).update(payload);
}

deleteUser(userId:string){
  return this.firestore
  .collection('users')
  .doc(userId)
  .delete();
}

getproductsCategory() {
  return this.firestore.collection("users", ref=>ref.where("productCategory","==",this.prodCat)).snapshotChanges();
}

getproductsType() {
  return this.firestore.collection("users", ref=>ref.where("type","==",this.prodType)).snapshotChanges();
}


async signIn(email:string, password:string){

  await this.fireBaseAuth.signInWithEmailAndPassword(email, password)
  .then(res=>{
    this.isLoggedIn = true;
    localStorage.setItem('user',JSON.stringify(res.user))
  })
}

async signUp(email:string, password:string){

  await this.fireBaseAuth.createUserWithEmailAndPassword(email, password)
  .then(res=>{
    this.isLoggedIn = true;
    localStorage.setItem('user',JSON.stringify(res.user))
  })
}

  logout(){
    this.fireBaseAuth.signOut()
    localStorage.removeItem('user');
  }

  getproductsbyid(){
    return this.firestore.collection("users").doc(this.productId).get();
  }

  addToCart(prod:any){
    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('cart')
      .add(prod)
      .then(response=>{console.log(response),(error:any)=>reject(error)
      })
    });
  }

  getCartData(){
    return this.firestore
    .collection('cart')
    .snapshotChanges();
  }

}

export interface users{
  id?:string;

  name:string;
  type:string;
  image_url:string;
  desc:string;
  productCategory:string;
  price:string;
  vendor:string;


}

export interface cart{

  name:string;
  type:string;
  image_url:string;
  desc:string;
  productCategory:string;
  price:string;
  vendor:string;
}

