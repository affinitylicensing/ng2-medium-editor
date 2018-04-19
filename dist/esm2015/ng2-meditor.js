import { Component, Input, forwardRef, ElementRef, ViewChild, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as MediumEditor from 'medium-editor';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MediumEditorComponent {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        this.platformId = platformId;
        this.propagateChange = (_) => { };
        this.el = el;
    }
    /**
     * @return {?}
     */
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
            this.editor.subscribe('editableInput', (event, editable) => {
                let /** @type {?} */ value = this.editor.elements[0].innerHTML;
                this.ngOnChanges(value);
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.editor) {
            this.editor.destroy();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.propagateChange(changes);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.editor) {
            if (value && value !== '') {
                this.editor.setContent(value);
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
}
MediumEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'medium-editor',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MediumEditorComponent),
                        multi: true
                    }],
                template: `<div #host class="{{templateClasses}}"></div>`
            },] },
];
/** @nocollapse */
MediumEditorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
MediumEditorComponent.propDecorators = {
    "options": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "templateClasses": [{ type: Input },],
    "host": [{ type: ViewChild, args: ['host',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MediumEditorModule {
}
MediumEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    MediumEditorComponent
                ],
                exports: [
                    MediumEditorComponent
                ]
            },] },
];
/** @nocollapse */
MediumEditorModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { MediumEditorComponent, MediumEditorModule };
//# sourceMappingURL=ng2-meditor.js.map
