import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Content } from './content';
@Injectable()
export class PostService {
  constructor(private http: Http) { }
  getContent(url: string, params: {}, options: {}): Promise<Content> {
    return this.http.get(url,params,options)
               .toPromise()
               .then(response =>response.json() as Content)
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
