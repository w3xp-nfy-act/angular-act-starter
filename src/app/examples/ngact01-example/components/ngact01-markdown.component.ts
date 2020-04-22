import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../shared/services';

@Component({
  selector: 'app-ngact01-markdown',
  template: `
  <!-- static markdown -->
  <ng-template [ngIf]="loadingService.isLoading() | async">
      <!-- more elements -->
      <markdown ngPreserveWhitespaces>
      ## There are many resources to complement the Angular docs.</markdown>
      
      <!-- variable binding -->
      <markdown [data]="markup"></markdown>
  </ng-template>
    
  <!-- loaded from remote url -->
  <markdown [src]="'./assets/md/ngact01.md'" (load)="onLoad($event)" (error)="onError($event)"></markdown>
  `,
  styles: [`
  p {
    width: 95%;
    margin-left: 15px;
  }
`]
})
export class AngularArticleComponent implements OnInit {
  markup: any;

  constructor(public loadingService: LoadingService) {
    this.markup = `
      * See:  
      [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)  
      [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
      [TypeScript](https://www.typescriptlang.org/docs/home.html)  
      
      * Infos:
      > Mozilla's MDN docs include both HTML and JavaScript introductions. 
      > TypeScript's docs include a 5-minute tutorial.  
        `;
  }

  ngOnInit() {

  }

  public onLoad($event) {
    console.log('Angular-Angular 01:  onLoad')
    
    setTimeout(() => {
        this.loadingService.showLoader();
    }, 0);
}

public onError($event) {
    console.log('Angular-Angular 01: onError');
}
}