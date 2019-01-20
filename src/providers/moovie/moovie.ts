import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as apiKey from '../../../secretKey.json';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath: string = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?language=pt-BR&api_key=' + apiKey.moviedb);
  }

}
