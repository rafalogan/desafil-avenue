import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyComponent } from "./pages/giphy/giphy.component";

const routes: Routes = [
  {path : 'cats', component: GiphyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
