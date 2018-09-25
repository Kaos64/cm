import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './screen/main.component';
import { SearchComponent } from './screen/search/search.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'search', component: SearchComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
