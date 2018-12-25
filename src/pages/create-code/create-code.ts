import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';


@Component({
  selector: 'page-create-code',
  templateUrl: 'create-code.html',
})
export class CreateCodePage {

  public encodeData: null;
  public encodedsDatas: null;

  message: string = null;
  file: string = null;
  object: string = null;
  subject: string = null;

  // public createdData: null;
  // public createdCode: null;
  // public fileTransfer: any;
  // public dismissLoading: any;
  // public presentToast: any;

  constructor (
    // private transfer: FileTransfer,
    private socialSharing: SocialSharing,
    public barcodeScanner: BarcodeScanner,
    // private file: File,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }
  
// Button Created new code
  onCreatedQR() {

    // this.createdCode = this.createdData;
    // console.log(this.createdCode);

    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
    .then((encodedsDatas) => {
        console.log(encodedsDatas);
        this.encodeData = encodedsDatas;
    
      }, (err) => {
        console.log('Error', err);
    });

    this.socialSharing.share(this.message, this.subject, this.file, this.object)
    .then((encodedsDatas) => {
      console.log(encodedsDatas);
      this.encodeData = encodedsDatas;

    }).catch((err) => {
      console.log('Error', err);
    })

  }

 
// Button save photo
  // onSavePhotoToGallery() {
  //   const url = this.createdCode
  //   this.fileTransfer.download(url, this.file.externalRootDirectory + '/src/assets/imgs/this.createdCode/' + this.createdCode)
  //     .then(response => {
  //       console.log(response);
  //       this.dismissLoading().push(this.createdCode);
  //       this.presentToast('File has been downloaded to the Downloads folder. View it..')
  //     })
  //     .catch(err => {
  //         this.dismissLoading();
  //         console.log(err)
  //     });  
    
  // }
    
}

