import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
})
export class FeedPage {
    public nameUser:string = 'Marcelinho Carioca';

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    /**
     * sumTwoNumbers
     */
    public sumTwoNumbers(num1:number, num2:number): void {
        console.log(num1 + num2);
    }

    ionViewDidLoad() {

    }

}
