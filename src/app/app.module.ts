import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ConfigService } from './config.service';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';



@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    ConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
