import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { ConversationService } from '../../services/conversationService';

@Component({
  selector: 'chat',
  templateUrl: 'chat.html',
  providers: [ ConversationService ]
})
export class Chat {
    mensagem: string = "";
    mensagens: Array<Mensagem>;
    context: any = {};
    nome: string = "";
    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController, private navParams: NavParams, private conversationService: ConversationService) {
        this.mensagens = new Array<Mensagem>();
        this.nome = navParams.get("nome");
        this.context.nome = this.nome;
    }

    ionViewDidEnter() {
        this.mensagens = new Array<Mensagem>();
        this.conversationService.sendMessage("", JSON.stringify(this.context)).subscribe(
            data => {
                this.tratarRetorno(data);
            },
            error => {

            }
        )
    }

    enviarMensagem() {
        this.mensagens.push(new Mensagem(this.mensagem, false));

        this.conversationService.sendMessage(this.mensagem, JSON.stringify(this.context)).subscribe(
            data => {
                this.tratarRetorno(data);
            },
            error => {

            }
        )

        this.mensagem = "";
    }

    private tratarRetorno(data: any) {
        this.context = data.context;
        let msg = "";

        if(data.output.text.length >= 1) {
            msg = data.output.text.join(" ");
        } else if(data.output.text.length == 1) {
            msg = data.output.text[0];
        }

        this.mensagens.push(new Mensagem(msg, true));

        setTimeout(() => {
            this.content.scrollToBottom(300);
        });
    }

}

export class Mensagem  {
    mensagem: string;
    isWatson: boolean;

    constructor(mensagem: string, isWatson: boolean) {
        this.mensagem = mensagem;
        this.isWatson = isWatson;
    }
}