import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor( public hc :HttpClient) { }
//taking the data from external api
 getData():Observable<object[]>{

    return this.hc.get<object[]>("https://jsonplaceholder.typicode.com/comments")
  }
}
