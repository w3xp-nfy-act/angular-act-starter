import { Component } from '@angular/core';
import { LoadingService } from '../../../shared/services';

@Component({
    selector: 'app-ngact02-markdown',
    template: `
    <markdown [src]="'./assets/md/ngact02.md'"(load)="onLoad($event)" (error)="onError($event)"></markdown>
    `
})

export class MarkdownArticleComponent {

    constructor(public loadingService: LoadingService) {}
    
    public onLoad($event) {
        console.log('Angular-Angular 02:  onLoad')
        
        setTimeout(() => {
            this.loadingService.showLoader();
        }, 0);
    }
    
    public onError($event) {
        console.log('Angular-Angular 02: onError');
    }
}