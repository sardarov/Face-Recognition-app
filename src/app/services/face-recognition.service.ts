import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaceRecognitionService {

  private endpoint = 'https://facerecognitionangular.cognitiveservices.azure.com/face/v1.0/';

  constructor(private httpClient: HttpClient) { }

  detect(imageUrl: string){
    
    return this.httpClient.post(`${this.endpoint}detect?returnFaceAttributes=age,gender,smile,emotion,glasses,facialHair`,
                                {url: imageUrl}, {headers});
  }

  getPersonGroups() {
    return this.httpClient.get<any[]>(`${this.endpoint}/persongroups`, {headers});
  }

  deletePersonGroup(personGroupId) {
    return this.httpClient.delete(`${this.endpoint}/persongroups/${personGroupId}`, {headers});
  }

  createPersonGroup(personGroup) {
    return this.httpClient.put<any[]>(`${this.endpoint}/persongroups/${personGroup.personGroupId}`, personGroup, {headers});
  }
}

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'e2465f1be6e841a8ac6b535ae8c9bdae'
});

