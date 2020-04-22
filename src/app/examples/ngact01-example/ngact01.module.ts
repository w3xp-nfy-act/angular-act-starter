import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { AngularComponent, AngularArticleComponent } from '.';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AngularComponent,
    AngularArticleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild(),
  ],
  exports: [AngularComponent, AngularArticleComponent]
})
export class AngularModule { }
