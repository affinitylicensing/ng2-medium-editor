import { Component, Input, forwardRef, ElementRef, ViewChild, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as MediumEditor from 'medium-editor';

var MediumEditorComponent = (function () {
    function MediumEditorComponent(el, platformId) {
        this.platformId = platformId;
        this.propagateChange = function (_) { };
        this.el = el;
    }
    MediumEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = (typeof this.options === 'string') ? JSON.parse(this.options)
            : (typeof this.options === 'object') ? this.options : {};
        if (this.placeholder && this.placeholder !== '') {
            Object.assign(this.options, {
                placeholder: { text: this.placeholder }
            });
        }
        if (isPlatformBrowser(this.platformId)) {
            this.editor = new MediumEditor(this.host.nativeElement, this.options);
            this.editor.subscribe('editableInput', function (event, editable) {
                var value = _this.editor.elements[0].innerHTML;
                _this.ngOnChanges(value);
            });
        }
    };
    MediumEditorComponent.prototype.ngOnDestroy = function () {
        if (this.editor) {
            this.editor.destroy();
        }
    };
    MediumEditorComponent.prototype.ngOnChanges = function (changes) {
        this.propagateChange(changes);
    };
    MediumEditorComponent.prototype.writeValue = function (value) {
        if (this.editor) {
            if (value && value !== '') {
                this.editor.setContent(value);
            }
        }
    };
    MediumEditorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    MediumEditorComponent.prototype.registerOnTouched = function (fn) { };
    return MediumEditorComponent;
}());
MediumEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'medium-editor',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return MediumEditorComponent; }),
                        multi: true
                    }],
                template: "<div #host class=\"{{templateClasses}}\"></div>"
            },] },
];
MediumEditorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
]; };
MediumEditorComponent.propDecorators = {
    "options": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "templateClasses": [{ type: Input },],
    "host": [{ type: ViewChild, args: ['host',] },],
};
var MediumEditorModule = (function () {
    function MediumEditorModule() {
    }
    return MediumEditorModule;
}());
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
MediumEditorModule.ctorParameters = function () { return []; };

export { MediumEditorModule, MediumEditorComponent as ɵa };
//# sourceMappingURL=ng2-meditor.js.map
