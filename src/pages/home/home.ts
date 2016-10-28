import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Chat } from '../chat/chat'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome: string = "";

  constructor(public navCtrl: NavController, public toastController: ToastController) {

  }

  entrar() {
    if(this.nome == "" || this.nome == null) {
      let toast = this.toastController.create({
        message: 'Digite seu nome para entrar',
        duration: 2000
      });
      toast.present();
    } else {
      this.navCtrl.push(Chat, {nome: this.nome});
    }
  }

}
