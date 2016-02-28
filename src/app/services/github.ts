import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Github {
  constructor(private http: Http) {
  }

  public getOrg(org: string): any {
    return this.makeRequest(`orgs/${org}`);
  }

  public getReposForOrg(org: string): any {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  public getRepoForOrg(org: string, repo: string): any {
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  private makeRequest(path: string): any {
    let params = new URLSearchParams();
    params.set('per_page', '100');
    let url = `https://api.github.com/${path}`;
    return this.http.get(url, { search: params })
      .map((res) => res.json());
  }
}
