import { Component, OnInit, AfterViewInit} from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { HttpResponse } from './models/http.response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
    title = 'app';
    users:User[] = [];

    constructor(private userService:UserService){}

    ngOnInit(){
        for(let i = 0; i < 10; i++){
            this.userService.addUser({
                user_id: i.toString(),
                name: "name_" + i
            }).subscribe((response:HttpResponse) => { })
        }
    }

    ngAfterViewInit(){
        setTimeout(() => {
            this.userService.getUesrs()
                .subscribe((response:HttpResponse) => {
                    for(let user of response.data){
                        this.users.push({
                            user_id: "" + user.user_id,
                            name: user.name
                        });
                    }
                });
        }, 3 * 1000);
    }
}
