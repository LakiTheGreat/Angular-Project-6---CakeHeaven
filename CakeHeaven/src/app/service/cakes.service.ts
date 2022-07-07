import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CakeImage } from '../model/cake-image-model';
import { Cake } from '../model/cake-model';
import { Message } from '../model/message-model';
import { Profile } from '../model/profile.model';

const baseUrl = 'http://localhost:3000/api/cakes';

@Injectable({
  providedIn: 'root',
})
export class CakesService {
  constructor(private http: HttpClient) {}

  getCakes(params?: any): Observable<Cake[]> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }
    return this.http.get(baseUrl, options).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Cake(elem))) || [];
      })
    );
  }

  getIngredients(): Observable<string[]> {
    return this.http.get('http://localhost:3000/api/ingredients').pipe(
      map((data: any) => {
        return data as Array<string>;
      })
    );
  }

  getCake(id: number): Observable<Cake> {
    return this.http.get(baseUrl + '/' + id).pipe(
      map((data: any) => {
        return new Cake(data);
      })
    );
  }

  getCakeImages() {
    return this.http.get('http://localhost:3000/api/slideshow').pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new CakeImage(elem))) || [];
      })
    );
  }

  getProfiles(): Observable<Profile> {
    return this.http.get('http://localhost:3000/api/user').pipe(
      map((data: any) => {
        return new Profile(data[0]);
      })
    );
  }

  putProfile(id: number, newProfile: Profile): Observable<any> {
    return this.http
      .put(`http://localhost:3000/api/user/${id}`, newProfile)
      .pipe(
        map((data: any) => {
          return new Profile(data);
        })
      );
  }

  postMessage(newMessage: Message): Observable<any> {
    return this.http
      .post(`http://localhost:3000/api/messages`, newMessage)
      .pipe(
        map((data: any) => {
          return new Message(data);
        })
      );
  }
}
