import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/post-list',
    pathMatch: 'full',
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },

  {
    path: 'post-add',
    component: PostEditComponent,
  },
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
