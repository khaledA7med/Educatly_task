import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [BlogCardComponent],
  imports: [CommonModule, NgxSpinnerModule],
  exports: [BlogCardComponent, NgxSpinnerModule],
})
export class SharedModule {}
