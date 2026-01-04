import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'sb-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, RouterModule, RouterLink]
})
export class HomeComponent {}
