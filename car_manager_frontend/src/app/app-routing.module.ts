import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecardataComponent } from './createcardata/createcardata.component';

const routes: Routes = [
  {path:'form/:mode', component: CreatecardataComponent},
  {path:'form/:mode/:id', component: CreatecardataComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
