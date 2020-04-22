import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../shared/services';

@Component({
    selector: 'app-input',
    styleUrls: ['./ngact02-view.component.scss'],
    templateUrl: './ngact02-view.component.html'
})

export class MarkdownComponent implements OnInit {

    constructor(public loadingService: LoadingService) { }

    ngOnInit() {
		console.log('Markdown-Component: ngOnInit');
    }
}