import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: '../app/app.component.html',
    styleUrls: ['../app/app.component.css']
})

export class AppComponent implements OnInit {
    // Declare fields
    message: String;
    users: User[];
    activeUser: User;
    
    constructor(){
        // Add initialisation when this component is created
        this.message = 'Hello !'
        this.users = [{
            id: 12,
            givenName: 'Jill',
            sureName: 'Valentine'
        },{
            id: 13,
            givenName: 'Ada',
            sureName: 'Wong'
        },{
            id: 13,
            givenName: 'Claire',
            sureName: 'Redfield'
        }];
    }

    ngOnInit(){
        // TODO: Add initialisation before this component is displayed
        
    }
    
    /**
     * Handle click event of user list item.
     */
    onUserSelected(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }
}