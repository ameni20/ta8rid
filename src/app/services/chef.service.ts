import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  chefURL: string = "api/chefs";
  constructor(private httpClient: HttpClient) { }

  sendRequestToGetAllChefs() {
    return this.httpClient.get(this.chefURL);
  }

  sendRequestToDeleteChef(id) {
    console.log('Here chef into service', id);
    return this.httpClient.delete(`${this.chefURL}/${id}`);
  }

  sendRequestToAddChef(obj: any, img: File) {
    console.log('Here obj to send to BE', obj);
    let formData = new FormData();
    formData.append('name', obj.name);
    formData.append('speciality', obj.speciality);
    formData.append('experience', obj.experience);
    formData.append('img', img);
    return this.httpClient.post(this.chefURL, formData);
  }

  sendRequestToGetChefById(id: number) {
    return this.httpClient.get(`${this.chefURL}/${id}`);
  }

  sendRequestToEditChef(chefObj) {
    return this.httpClient.put(`${this.chefURL}/${chefObj.id}`, chefObj)
  }


}
