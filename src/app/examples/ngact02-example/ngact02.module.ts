import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { MarkdownComponent, MarkdownArticleComponent } from '.';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
      MarkdownComponent,
      MarkdownArticleComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      MarkdownModule.forChild()
  ],
  exports: [MarkdownComponent, MarkdownArticleComponent]
})
export class OperatorModule { }
