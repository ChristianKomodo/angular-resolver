import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsResolver implements Resolve<string> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> {
    // resolve(): Observable<string> {  // this is all we need for just this message
    // return of('Route!');  // without delay
    return of('Route!').pipe(delay(3000));
  }
}
