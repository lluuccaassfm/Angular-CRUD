import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-ng-content',
    template: `
        <p>
            <ng-content select="[modal]"></ng-content>
        </p>
        <p>
            <ng-content select="div"></ng-content>
        </p>
    `,
    styles: []
})
export class TestNgContentComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
