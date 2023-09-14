import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './model/article';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ZyllemApiService {

    constructor(private _http: HttpClient){
    }

    // private url = "/assets"
    // getArticles(): Observable<Article[]> {
    //     return this._http.get<Article[]>(`${this.url}/api.json`)
    // }

    private url = "https://retoolapi.dev/RT04rL"
    getArticles(): Observable<Article[]> {
        return this._http.get<Article[]>(`${this.url}/articles`)
    }

}