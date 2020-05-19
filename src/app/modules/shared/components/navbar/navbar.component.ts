import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NavItem} from '../../utilities/NavItem';
import {SafeStyle} from '@angular/platform-browser';

@Component({
    selector: 'sb-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() items: NavItem[];

    @HostBinding('style') @Input() style: SafeStyle;

    constructor() {
    }

    ngOnInit() {
    }

}
