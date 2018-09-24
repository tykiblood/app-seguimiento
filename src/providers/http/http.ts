import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Platform } from 'ionic-angular';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  token: any;
  token_ready: boolean=false;
  error_message: any;
  constructor(
    public http: HttpClient,
    private http_native: HTTP,
    private platform: Platform
  ) {
    this.platform.ready()
    .then(() =>{
      console.log('Platform ready')
    })
    console.log('Hello HttpProvider Provider');
  }
  getToken() {
    return this.http_native.get('http://181.143.188.106/csrfToken', {}, {})
  }
  getLogin(email, password) {
    return this.http_native.put('http://181.143.188.106/api/v1/entrance/login', {
      'emailAddress': email,
      'password': password,
      '_csrf': this.token
    }, {});
  }
  getForms() {
    return this.http_native.get('http://181.143.188.106/api/forms/user', {}, {})
  }
  postForm(point, formJSON) {
    return this.http_native.post('http://ptsv2.com/t/uvigj-1537766511/post', {
      'data': {
        'point': point,
        'form': formJSON
      }
    }, {})
  }
  postCelData(celData) {
    return this.http_native.post('http://ptsv2.com/t/uvigj-1537766511/post', {
      'data': celData
    }, {})
  }
}
