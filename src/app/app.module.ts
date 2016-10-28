import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Chat } from '../pages/chat/chat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Chat
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Chat
  ],
  providers: []
})
export class AppModule {}
