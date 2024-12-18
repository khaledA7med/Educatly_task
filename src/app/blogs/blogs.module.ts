import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class BlogsModule {}
