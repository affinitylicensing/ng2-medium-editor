import { Component, Input, forwardRef, ElementRef, ViewChild, OnChanges, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as MediumEditor from 'medium-editor';

@Component({
    selector: 'medium-editor',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MediumEditorComponent),
        multi: true
    }],
    template: `<div #host class="{{templateClasses}}"></div>`
})
export class MediumEditorComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
    @Input() options: any;
    @Input() placeholder: string;
    @Input() templateClasses: string;
    el: ElementRef;
    editor: any;
    @ViewChild('host') host: any;
    propagateChange = (_: any) => { };

    constructor(el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
        this.el = el;

    }

    ngOnInit() {
        this.options = (typeof this.options === 'string') ? JSON.parse(this.options)
            : (typeof this.options === 'object') ? this.options : {};
        if (this.placeholder && this.placeholder !== '') {
            Object.assign(this.options, {
                placeholder: { text: this.placeholder }
            });
        }

	if (isPlatformBrowser(this.platformId)) {

          this.editor = new MediumEditor(this.host.nativeElement, this.options);
          this.editor.subscribe('editableInput', (event: any, editable: any) => {
            let value = this.editor.elements[0].innerHTML;
            this.ngOnChanges(value);
          });
	}
    }

    ngOnDestroy() {
        if (this.editor) {
            this.editor.destroy();
        }
    }

    ngOnChanges(changes: any) {
        this.propagateChange(changes);
    }

    writeValue(value: any) {
        if (this.editor) {
            if (value && value !== '') {
                this.editor.setContent(value);
            }
        }
    }
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any) { }

}
