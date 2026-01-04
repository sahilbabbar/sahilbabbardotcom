import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'sb-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [RouterLink, NgIf],
    standalone: true
})
export class HeaderComponent implements OnInit {
    currentRoute: string = '/';

    constructor(private router: Router) {}

    ngOnInit() {
        this.currentRoute = this.router.url;
    }
}
