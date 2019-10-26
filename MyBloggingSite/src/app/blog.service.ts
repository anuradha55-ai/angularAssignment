import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blog } from '../home/blog';
import { map} from 'rxjs/operators';
//import { post } from 'angular-in-memory-web-api/';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  public getBlogs() : Observable<blog[]>{ 
       return this.httpClient.get<blog[]>(this.SERVER_URL + 'blogs').pipe(map((data) => data));
  }

  public getBlog(blogId: number) : Observable<blog>{
       return this.httpClient.get<blog>(`${this.SERVER_URL + 'blogs'}/${blogId}`); 
  }

  public addLikes(blog: blog) : Observable<blog>{
    return this.httpClient.put<blog>(`${this.SERVER_URL + 'blogs'}/${blog.id}`, blog).pipe(map(() => blog));
  }

  public addComment(blog: blog) : Observable<blog> {
    console.log("id addComment : " + JSON.stringify(blog.comments));
    return this.httpClient.put<blog>(`${this.SERVER_URL + 'blogs'}/${blog.id}`, blog).pipe(map(() => blog));
  }

 
  /*public createPolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.post(`${this.SERVER_URL + 'blogs'}`, post)
  }

  public deletePolicy(policyId){
      return this.httpClient.delete(`${this.SERVER_URL + 'blogs'}/${policyId}`)
  }
  public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'blogs'}/${policy.id}`, post)
  }*/
}
