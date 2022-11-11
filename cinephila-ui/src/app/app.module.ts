import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { GoogleOAuthService } from './OAuth/oauth.service';
import { MoviesService } from './services/movies.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthConfigModule } from './auth/auth-config.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomepageComponent, FooterComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthConfigModule,
  ],
  providers: [
    GoogleOAuthService,
    MoviesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
