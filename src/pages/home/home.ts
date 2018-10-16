import { Component } from '@angular/core';
import { NavController,  ModalController } from 'ionic-angular';

import { BusquedirecPage } from '../busquedirec/busquedirec';
import { FiltrosPage } from '../filtros/filtros';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datas:any =[];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
  ) {

    for(let index = 0; index <10; index++){
      this.datas.push(index);
    }

  }

  busquedirec(){
    let modal = this.modalCtrl.create(BusquedirecPage);
    modal.present();
    modal.onDidDismiss(data=>console.log(data));
  }

  filtros(){
    let modal = this.modalCtrl.create(FiltrosPage);
    modal.present();
    modal.onDidDismiss(data=>console.log(data));
  }
}
