import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AberturaComponent } from './pages/abertura/abertura.component';
import { HeaderAberturaComponent } from './components/header-abertura/header-abertura.component';
import { HeaderWorkspaceComponent } from './components/header-workspace/header-workspace.component';
import { MaterialDidaticoComponent } from './pages/material-didatico/material-didatico.component';
import { VerTodosMDidaticoComponent } from './pages/ver-todos-m-didatico/ver-todos-m-didatico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AberturaComponent,
    HeaderAberturaComponent,
    HeaderWorkspaceComponent,
    MaterialDidaticoComponent,
    VerTodosMDidaticoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
