import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrevisioniComponent } from './home/previsioni/previsioni.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "previsioni", component: PrevisioniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
