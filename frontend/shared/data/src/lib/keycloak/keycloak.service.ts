import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';  

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

 // private _keycloak: Keycloak | undefined;

  initKeycloak() {
    console.log("initialitation keycloak")
  }

  constructor() { }

 async init() {
    console.log("initialitation keycloak")
  }

}
