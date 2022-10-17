import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzenceModule } from '@ezence/components';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, EzenceModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
