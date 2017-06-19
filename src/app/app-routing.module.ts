import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZippyComponent } from 'app/main/container/zippy/zippy.component';
import { ContactFormComponent } from 'app/main/forms/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'zippy', component: ZippyComponent },
  { path: 'form', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
