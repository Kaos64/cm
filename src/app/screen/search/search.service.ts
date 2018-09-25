import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Result{
  url: string;
  title: string;
  cover: string;
  type: string;
}

export interface Search{
  data: Result[];
  query: string;
  pageSize: number;
  pageIndex: number;
  pageCount: number;
}

export interface Path{
  path: string;
  file: string;
  isDir: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = 'http://localhost:3000';

  constructor(protected http: HttpClient) { }

  public search(q: string, p: number = 1):Observable<Search>{
    const options = {
      params: {
        q: q,
        p: `${p}`
      }
    }
   return  this.http.get<any>(`${this.url}/search`, options).pipe(
      map (r =>  r.result)
    );
  }

  public explore(path): Observable<Path[]>{
    return this.http.post<any>(`${this.url}/search/explore`, {path: path}).pipe(
      map (r=> r.result)
    );

  }
}
