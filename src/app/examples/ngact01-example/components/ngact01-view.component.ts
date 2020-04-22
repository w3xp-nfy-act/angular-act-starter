import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../shared/services';

@Component({
	selector: 'app-input',
	styleUrls: ['./ngact01-view.component.scss'],
	templateUrl: './ngact01-view.component.html'
})
export class AngularComponent implements OnInit {

	constructor(public loadingService: LoadingService) { }

	ngOnInit() {
		console.log('Angular-Component: ngOnInit');
	}
}
