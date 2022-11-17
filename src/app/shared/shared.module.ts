import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { EzenceModule } from '@ezence/components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [NavigationComponent, FooterComponent],
    imports: [CommonModule, EzenceModule, HttpClientModule],
    exports: [NavigationComponent, FooterComponent, EzenceModule]
})
export class SharedModule {}
