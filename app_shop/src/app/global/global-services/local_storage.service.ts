import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class Storage{
    constructor(){};

    create_storage(name_data:string, content_data:string){
        const key = environment.key;
        const data = CryptoJS.AES.encrypt(content_data, key).toString();
        const name = CryptoJS.AES.encrypt(content_data, name_data).toString();
        localStorage.setItem(name,data);
    }
    get_storage(name_data:string){
        const key = environment.key;
        const data = localStorage.getItem(name_data);
        if(data ===null){
            return JSON.parse( data || '{}');
        }else{
            const bytes = CryptoJS.AES.decrypt(<string>data, key);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8); 
            return JSON.parse( decrypted || '{}');
        }
        
        
        
     }
    delete_storage(name_data:string){
        const key = environment.key;
        const data = CryptoJS.AES.encrypt(name_data, key).toString();
        localStorage.removeItem(data)
    }
    
}

