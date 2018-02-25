import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpResponse} from '../models/http.response';
import {User} from '../models/user';

@Injectable()
export class UserService {

    constructor(private http:HttpClient){}

    public getUesrs():Observable<HttpResponse>{
        return this.http.get<HttpResponse>('/api/users');
    }

    public getUser(user:User):Observable<HttpResponse>{
        return this.http.get<HttpResponse>(`/api/users/${user.user_id}`);
    }

    public addUser(user:User):Observable<HttpResponse>{
        return this.http.post<HttpResponse>(`/api/users/`, user);
    }

    public updateUser(user:User):Observable<HttpResponse>{
        return this.http.post<HttpResponse>(`/api/users/${user.user_id}`, user.name);
    }

    public deleteUser(user:User):Observable<HttpResponse>{
        return this.http.delete<HttpResponse>(`/api/users/${user.user_id}`);
    }

}