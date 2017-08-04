import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientChatPage } from './client-chat';

@NgModule({
  declarations: [
    ClientChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientChatPage),
  ],
})
export class ClientChatPageModule {}
