import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';

import io from 'socket.io-client';

/**
 * Generated class for the ClientChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-client-chat',
  templateUrl: 'client-chat.html',
})
export class ClientChatPage {
  zone;
  chats;
  chatinp;
  socket;
  loading: Loading;
  groupInformation: any;
  groupName: string;

  /*
  static get parameters () {
    return [NgZone];
  }
  */
  constructor (
    public ngzone: NgZone, 
		public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.groupInformation = this.navParams.get('group');
    this.groupName = 'group-'+this.groupInformation.id;
    this.zone = ngzone;
    this.chats = [];
    this.chatinp ='';
    this.socket = io('http://192.168.1.14:3000');
    this.socket.on(this.groupName, (msg) => {
      this.zone.run(() => {
        // console.log('Ankit recive: ', this.groupName);
        this.chats.push(msg);
      });
    });
  }
    
  pushMessage (msg, group) {
    if (msg != '') {
      let a = {
        gname: this.groupName,
        msg: msg,
        c_date: new Date().getTime()
      };
      // console.log('Ankit send: ', this.groupName);
      this.socket.emit(this.groupName, a);
    }
    this.chatinp = '';
  }
}
