/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   19-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 30-05-2017
 */

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the AlertService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertService {

  constructor(
  ) {
  }

  doDisplayAlert(_payload):Observable<any>{
    return Observable.create((observer) => {
      console.log(_payload)
      observer.next({ type: 'ERROR_DISPLAYED', payload: _payload })
    })
  }
}
