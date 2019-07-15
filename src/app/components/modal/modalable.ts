import {EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from './modal.component';

export class Modalable implements OnInit {
    @ViewChild(ModalComponent)
    modalComponent: ModalComponent;
    @Output()
    onHide: EventEmitter<any> = new EventEmitter();
    @Output()
    onShow: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        this.modalComponent.onHide.subscribe(event => {
            console.log(event);
            this.onHide.emit(event);
        });

        this.modalComponent.onShow.subscribe(event => {
            console.log(event);
            this.onShow.emit(event);
        });
    }

    hide() {
        this.modalComponent.hide();
    }

    show() {
        this.modalComponent.show();
    }
}