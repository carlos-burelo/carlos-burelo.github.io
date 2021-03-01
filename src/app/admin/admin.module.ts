import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PostsComponent } from './posts/posts.component';
import { NewComponent } from './posts/new/new.component';
import { EditComponent } from './posts/edit/edit.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [AdminComponent, PostsComponent, NewComponent, EditComponent, ResumeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
