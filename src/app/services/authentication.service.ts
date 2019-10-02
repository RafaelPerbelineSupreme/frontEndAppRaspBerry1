import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOLKEN_KEY = 'auth-tolken';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private storage: Storage, private plt: Platform) { }

  login(){
    return this.storage.set(TOLKEN_KEY, '12345');
  }
  logout(){

  }
  isAuthenticated(){

  }
  checkTolken(){

  }
}
