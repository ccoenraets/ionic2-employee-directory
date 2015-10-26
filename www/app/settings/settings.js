import {Page, NavController} from 'ionic/ionic';


@Page({
    templateUrl: 'app/settings/settings.html'
})

export class SettingsPage {
    constructor(nav:NavController) {
        this.nav = nav;
    }

}
