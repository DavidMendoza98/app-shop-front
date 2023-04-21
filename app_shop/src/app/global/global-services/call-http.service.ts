import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Storage } from './local_storage.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallHttpService {
  private user = this.storage.get_storage('user');
  private token = this.user.token;
  private api = environment.servidor;

  constructor(private http: HttpClient, private storage:Storage, private router:Router) { } //,private notification: NzNotificationService) { }

  httpGet<T>(url:string):Observable<T>{
    const get_url = this.api+url;
    const Headers = {
      'Authorization': "Token "+this.token
    };

    var response = this.http.get<T>(get_url,{headers:Headers})
      .pipe(catchError(this.handleError()));

      return response;
  }

  httpPost<T>(url: string, contentBody: any = {}): Observable<T> {   
    const get_url = this.api+url; 
    const headers = {
      'Authorization': "Token "+this.token
    };
    var response = this.http.post<T>(get_url, contentBody,{headers})
        .pipe(catchError(this.handleError()));
    return response;
  }

  httpPut<T>(url: string, body:{}): Observable<T> {    
    const get_url = this.api+url; 
    const headers = {
      'Authorization': "Token "+this.token
    };
      return this.http.put<T>(get_url,body,{headers});
  }

  httpDelete<T>(url:string):Observable<T>{
    const get_url = this.api+url;
    const headers = {
      'Authorization': "Token "+this.token
    };
    var response = this.http.delete<T>(get_url,{headers})
      .pipe(catchError(this.handleError()));

      return response;
  }

  private handleError<T = any>() {
    return (error: HttpErrorResponse): Observable<T> => {
      

      if(error.error.hasError){
       
      }

      if(error.status == 400){  
        //this.notification.error('Error', 'Se ha producido un error');
        //this.router.navigate(['login']);
      }
      if(error.status == 401){  
        //this.notification.error('Error', 'Se ha producido un error');
        //this.router.navigate(['login']);
      }

      if(error.status == 422){
        let mensaje = '';

        /**
         * obtener error, por lo general el 422 viene del validor del backend
         *  aqui se revisa segun el formato, que definan con su backend
         */

        throw new Error(mensaje); 
      }

      console.log(error);

      throw new Error(`Invalid`); //throwError('')
    }
  }
}
