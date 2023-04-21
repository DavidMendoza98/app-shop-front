import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncryptionServiceService {

  constructor() { }
  encrypt(num:any){
    const key = environment.key;
    return CryptoJS.AES.encrypt(num.toString(), key).toString();
  }
  decrypt(ciphertext:any){
    const key = environment.key;
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8); 
    return decrypted;
  }
}
