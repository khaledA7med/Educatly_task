import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    loadChildren: () =>
      import('../app/blogs/blogs.module').then((m) => m.BlogsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
