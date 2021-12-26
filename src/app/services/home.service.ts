import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://gateway.marvel.com:443/v1/public/characters?'
  private apiKey = '5a237863b3cc2061003cbbc4fe20dc06'
  private hash = '7789845489216a1b4832e2ce2e286b4b'
  private ts = 'thesoer'
  private _dataCharacter: any;
  constructor(private http: HttpClient) { }

  get dataCharacter(){
    return this._dataCharacter;
  }

  set dataCharacter(data: any){
    this._dataCharacter = data;
  }

  getCharacters(params: paramsCharacters){
    let URL;
    if(params){
      URL = this.url + 'name=' + params.name + '&apikey=' + this.apiKey + '&ts=' + this.ts + '&hash=' + this.hash;
    }else{
      URL = this.url + '&apikey=' + this.apiKey + '&ts=' + this.ts + '&hash=' + this.hash;
    }
    return this.http.get(URL);
  }

  getCharactersDetails(params: paramCharactersDetails){
    const URL = this.url + 'id=' + params.id + '&apikey=' + this.apiKey + '&ts=' + this.ts + '&hash=' + this.hash;
    return this.http.get(URL);
  }
}

interface paramsCharacters{
  name?: String;
}

interface paramCharactersDetails{
  id: number;

}
