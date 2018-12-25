import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  // ประกาศตัวแปร
  mysignaltitle = '';
  mysignalbody = '';

  mysignaltitle2 = '';
  mysignalbody2 = '';

  constructor(
    private oneSignal: OneSignal,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { 

    this.oneSignalApp();

  }

  oneSignalApp() {
    this.oneSignal.startInit('8b9f39f4-b96c-4f85-93fa-d613c6ded2d0', '812872692077');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
    // do something when notification is received => ทำอะไรเมื่อได้รับการแจ้งเตือน
      // alert('notification is received');
      alert(JSON.stringify(data.payload.title + data.payload.body));

      this.mysignaltitle = data.payload.title;
      this.mysignalbody = data.payload.body;

    });

    this.oneSignal.handleNotificationOpened().subscribe((res) => {
    // do something when a notification is opened => ทำอะไรบางอย่างเมื่อมีการเปิดการแจ้งเตือน
      alert('notification is opened');

      this.mysignaltitle2 = res.notification.payload.title;
      this.mysignalbody2 = res.notification.payload.body;
      
    });

    this.oneSignal.endInit();


  }

  

}
