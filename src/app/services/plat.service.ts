import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlatService {

  platURL: string = "http://localhost:3000/api/plats";
  constructor(private httpClient: HttpClient) { }

  sendRequestToGetAllPlats() {
    return this.httpClient.get<{ message: string, plats: any }>(this.platURL);
  }

  sendRequestToDeletePlat(id) {
    console.log('Here plat into service', id);
    return this.httpClient.delete<{message:string}>(`${this.platURL}/${id}`);
  }

  sendRequestToAddPlat(obj: any, img:File) {
    console.log('Here obj to send to BE', obj);
    let formData = new FormData();
    formData.append('name', obj.name);
    formData.append('description', obj.description);
    formData.append('price', obj.price);
    formData.append('note', obj.note);
    formData.append('img', img);
    return this.httpClient.post<{message:string}>(this.platURL, formData);
  }

  sendRequestToGetPlatById(x: number) {
    return this.httpClient.get<{message:string, plat:any}>(`${this.platURL}/${x}`);
  }

  sendRequestToEditPlat(platObj) {
    return this.httpClient.put<{message:string}>(`${this.platURL}/${platObj._id}`, platObj)
  }

  // sendRequestToGetAllPlatsByName(nameToSearch) {
  //   return this.httpClient.get(`${this.platURL}/?name=${nameToSearch}`)
  // }

  sendRequestToGetAllPlatsByNameAndPrice(obj) {
    return this.httpClient.post<{allPlats:any}>(`${this.platURL}/search`, obj);
  }
}
