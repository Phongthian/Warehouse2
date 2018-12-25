import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-table-data-out',
  templateUrl: 'table-data-out.html',
})
export class TableDataOutPage {

  public firebase = []
  public datas = { text:"", Date:"", ExpiredDate:"", NumberBox:"", NumberBottls:"" }

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    
    this.db.list("OutDataWarehouse").snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    ).subscribe(datas => {
      this.firebase = datas
      console.log(this.firebase)
    });

  }
// click delete data table
  delete(data) {
    this.db.list('/OutDataWarehouse/').remove(data)
      console.log(data);
  } 

  

}
