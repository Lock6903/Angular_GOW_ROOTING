import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyValkyriesComponent } from './bodyValkyries/body-valkyries/body-valkyries.component';
import { BodyComponent } from './bodyRavens/body/bodyRavens.component';
import { BodyDefaultComponent } from './bodyDefault/body-default/body-default.component';
const routes: Routes = [
 {
    path: 'bodyRavens', component:BodyComponent
  },
  {
    path: 'bodyValk', component: BodyValkyriesComponent,
  },
  {
    path: 'bodyDefault', component: BodyDefaultComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
