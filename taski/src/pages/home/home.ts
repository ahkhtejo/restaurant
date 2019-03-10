import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'; 
import {JesonConectionProvider} from "../../providers/jeson-conection/jeson-conection";
import {PDetailPage} from '../../pages/p-detail/p-detail';

import { AngularFireDatabase } from 'angularfire2/database';
//import {HomePage} from '../../pages/home/home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allProducts = [];
  public sletedar=[];
  public invoItem=0;
 public total:number=0;
 public pikar=[];
 public Vat :number;
 public totalVat:number;
 public dtattaa=[];
 public invoiceNo:number =1000;
 public toFifrebase=[];
      

  constructor(public navCtrl: NavController,private http: Http,private database :JesonConectionProvider,private alertCtrl: AlertController,public afd :AngularFireDatabase) { 
    this.getProducts();//on open page we get all the Products
  }
  
 
  getProducts(){
    //get the Products form the database (jeson file /assets/data.json )
    this.database.getProducts()
      .subscribe(data=>{this.allProducts=data});     
  }

  sleted(product){
    this.toFifrebase.push(product)
    //the user selet the Products 
    this.sletedar[this.invoItem]=product;//to save the sleted produc in array
    this.invoItem++;
    
    //this to calcolate the tootal price for seleted Products
    var s=parseInt(product.price)
    this.total=this.total +s;

    //to calcolate the 5% vat ( price %100)
    this.Vat=this.total/100;
    this.totalVat =this.total +this.Vat;// the total price
    
    //get the piks from   seleted Product
    for(var k=0;k<=product.piks.length; k++)
    {
      this.pikar[k]= product.piks[k];
    }
   
    this.toFifrebase.push(this.invoiceNo);
    this.toFifrebase.push(this.totalVat);
    
  }

  delsleted(product){
  //for delet item from invoice
  }

  reset(){
    console.log(this.toFifrebase);
    //basing data to firebase 
   
    this.afd.list("/invoi/").push(this.toFifrebase)
    // reser the invoice 
    this.sletedar.splice(0,this.sletedar.length);
    this.total=0;
    this.invoiceNo++;
    this.navCtrl.push(HomePage)// to refresh page 
    
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'طلب الوجبة ',
      message: 'اذا كنت تريد انها اعملية ',
      buttons: [
        {
          text: 'انهاء',
          role: 'cancel',
          handler: (product) => {
           
          }
        }
      ]
    });
    alert.present();
  }
  goToProductDetailPage(product)
  {
    this.navCtrl.push(PDetailPage,{
      productDetails:product
    });
  }


}
