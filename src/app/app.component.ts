import { Component, OnInit } from '@angular/core';
import { NotificationService } from './shared/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    examples = [
        {path: '/examples/ngact01-example', name: 'Angular'},
        {path: '/examples/ngact02-example', name: 'Markdown'}
    ];

    constructor(private snackbar: MatSnackBar, private ns: NotificationService) {
    }

    ngOnInit() {
        this.ns.notifications$
            .subscribe(notification => this.showNotification(notification));
    }

    showNotification(notification) {
        this.snackbar.open(notification, 'OK', {
            duration: 3000
        });
    }
}
