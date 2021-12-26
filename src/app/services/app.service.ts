import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

private _statusLoader = true;

constructor() {
  setTimeout(() => {
    this._statusLoader = false;
  }, 1000);
 }

get statusLoader(): boolean {
  return this._statusLoader;
}
set statusLoader(status: boolean) {
  this._statusLoader = status;
}

}
