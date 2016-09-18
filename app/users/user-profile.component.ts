import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'user-profile',
    template: `
        <div class="jumbotron" *ngIf="user">
            <h2>{{user.givenName}} <small>{{user.sureName}}</small></h2>
            <input class="form-control" [(ngModel)]="user.givenName">
        </div>
    `
})
export class UserProfileComponent implements OnInit {
    @Input() user: User;

    constructor() { }

    ngOnInit() { }
}