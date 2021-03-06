import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from "@angular/core";
import {UserService} from "./services/user.service";
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
