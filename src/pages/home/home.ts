import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Searchbar } from 'ionic-angular';

import { ClientChatPage } from '../client-chat/client-chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Searchbar) searchbar: Searchbar;

	chatInformation: any;
	searchToggle: boolean;

	constructor(
		public navCtrl: NavController, 
    public alertCtrl: AlertController
	) {
		this.searchToggle = false;
		this.chatInformation = [{
			id: 1,
			title: "Alan Walker - Faded",
			prof_image: "https://yt3.ggpht.com/-k7WILhueCts/AAAAAAAAAAI/AAAAAAAAAAA/aQWUNVk_moE/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
			description: "2015 Alan Walker & MER Musikk...",
			created_date: "Dec 03, 2015"
		}, {
			id: 2,
			title: "Laadki - Coke Studio",
			prof_image: "https://yt3.ggpht.com/-pKFVgkhc2bI/AAAAAAAAAAI/AAAAAAAAAAA/rZRx-uaTkZg/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
			description: "The word Laadki is a fond way of addressing a daughter.",
			created_date: "Apr 12, 2015"
		}, {
			id: 3,
			title: "Kuch To Hai - Do Lafz...",
			prof_image: "https://yt3.ggpht.com/-sAUCD_jwb7M/AAAAAAAAAAI/AAAAAAAAAAA/ePZk5ZxMLXc/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
			description: "Kuch To Hai Video | DO LAFZON KI KAHANI | Randeep Hooda, Kajal Aggarwal | Armaan Malik, Amaal Mallik | Full Video Song.",
			created_date: "Mar 05, 2016"
		}, {
			id: 4,
			title: "Naina - Dangal",
			prof_image: "https://yt3.ggpht.com/-neB_WHxRa-0/AAAAAAAAAAI/AAAAAAAAAAA/oJosw2JlKOs/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
			description: "A beautiful melodious composition by Pritam.",
			created_date: "Jan 02, 2017"
		}];
	}

	groupManagement (chat) {
		let group = chat;
		this.navCtrl.push(ClientChatPage, { group });
	}

	toggleSearch () {
		this.searchToggle = this.searchToggle ? false : true;
		if(this.searchToggle) {
			setTimeout(() => {
				this.searchbar.setFocus();
			}, 150);
		}
	}

	searchNev (keyCode, searchContent:any) {
    if(keyCode == 13 && searchContent.srcElement.value.trim().length > 0){
      // let search = searchContent.srcElement.value;
			this.infoPopup('Coming Soon...');
    }
  }

	infoPopup(text) {
    // this.loading.dismiss();
    let alert = this.alertCtrl.create({
      message: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}