import { Component } from '@angular/core';
import { NavController,  ModalController } from 'ionic-angular';

import { BusquedirecPage } from '../busquedirec/busquedirec';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  busquedirec(){
    let modal = this.modalCtrl.create(BusquedirecPage);
    modal.present();
    modal.onDidDismiss(data=>console.log(data));
  }
}
