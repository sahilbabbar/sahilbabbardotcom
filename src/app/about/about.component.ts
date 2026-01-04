import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sb-about',
    templateUrl: './about.component.html',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
    styleUrl: './about.component.scss'
})
export class AboutComponent {}
