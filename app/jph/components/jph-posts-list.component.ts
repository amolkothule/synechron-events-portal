import { Component, OnInit, Inject } from '@angular/core';
import { Post } from '../models/post';
import { JphService } from "../services/jph.service";

@Component({
    selector: 'jph-posts',
    templateUrl: '../views/jph-posts.component.html'
})

export class JphPostsListComponent implements OnInit {
    constructor(
        @Inject(JphService)
        private _jphService: JphService
    ) { }

    title: string = "json placholder's post data!";
    posts: Post[] = [];
    ngOnInit(): void {
        this._jphService.getAllPosts().subscribe(
            data => this.posts = data,
            err =>  console.log(err),
            () => console.log("service call completed")
        );
    }
}