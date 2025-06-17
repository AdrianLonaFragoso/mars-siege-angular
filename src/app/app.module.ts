import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './layout/footer/footer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloatingButtonsModule } from './components/floating-buttons/floating-buttons.module';
import { BtnGoUpModule } from './components/btn-go-up/btn-go-up.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FooterModule,
    NgbModule,
    BrowserAnimationsModule,
    FloatingButtonsModule,
    BtnGoUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
