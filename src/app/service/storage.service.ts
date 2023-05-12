import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageRef = firebase.app().storage().ref();
  url: string | null = null;

  constructor() { }

  async subirImagen(nombre: string, imgBase64: any) {
    try{
      let response = await this.storageRef.child('Imagenes/' + nombre).putString(imgBase64, 'data_url');
      console.log(response);
      this.url = await response.ref.getDownloadURL();
      return this.url;
    }catch(err){
      console.log(err);
      return null;
    }
  }
}
