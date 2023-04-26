import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AberturaComponent } from './pages/abertura/abertura.component';
import { MaterialDidaticoComponent } from './pages/material-didatico/material-didatico.component';
import { VerTodosMDidaticoComponent } from './pages/ver-todos-m-didatico/ver-todos-m-didatico.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'abertura', component: AberturaComponent },
  { path: 'material-didatico', component: MaterialDidaticoComponent },
  {
    path: 'ver-todos-material-didatico',
    component: VerTodosMDidaticoComponent,
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
