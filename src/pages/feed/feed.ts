import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
    providers: [
        MoovieProvider
    ]
})
export class FeedPage {
    public feed:object = {
        title: 'Marcelinho Carioca',
        date: 'November 5, 1995',
        description: 'Estou escrevendo meu Feed....',
        likes: 12,
        comments: 4,
        time_comment: '11h ago'
    };

    public listFilms = new Array<any>();

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private movieProvider: MoovieProvider) { }

    /**
     * sumTwoNumbers
     */
    public sumTwoNumbers(num1:number, num2:number): void {
        console.log(num1 + num2);
    }

    ionViewDidLoad() {
        this.movieProvider
            .getLatestMovies()
            .subscribe(data => {
                const response = (data as any);
                const obj = JSON.parse(response._body);
                this.listFilms = obj.results;
                console.log(obj);
            }, error => {
                console.log(error);
            });
    }

}
