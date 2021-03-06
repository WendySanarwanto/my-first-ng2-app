import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
//import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,    
//        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        UserProfileComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
