import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';


export const routes: Routes = [
  { path: 'gallery', component: GalleryImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
