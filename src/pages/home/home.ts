import { Component } from '@angular/core';
import { NavController,  ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'

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
    public alerCtrl: AlertController,
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

  doAlert() {
    let alert = this.alerCtrl.create({
      title: '<i class="fas fa-times-circle"></i>',
      message: 'No hay parqueaderos disponibles bajo sus criterios de búsqueda en esta zona',
      buttons: [
        {
          text: 'Editar filtros',
          handler: data => {
            console.log(this.filtros());
          }
        },
        {
          text: 'Mostrar todos',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    alert.present()
  }
  
}
