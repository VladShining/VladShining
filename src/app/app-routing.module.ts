import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoforComponent } from './forofor/forofor.component';

const routes: Routes = [
  {
    path: 'root',
    loadChildren: () => import('./root/root.module').then((m) => m.RootModule),
    // canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: '**', component: ForoforComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
