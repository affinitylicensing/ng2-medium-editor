(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('medium-editor')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', 'medium-editor'], factory) :
	(factory((global['ng2-meditor'] = {}),global.ng.core,global.ng.forms,global.MediumEditor));
}(this, (function (exports,core,forms,MediumEditor) { 'use strict';

var MediumEditorComponent = (function () {
    function MediumEditorComponent(el) {
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
        this.editor = new MediumEditor(this.host.nativeElement, this.options);
        this.editor.subscribe('editableInput', function (event, editable) {
            var value = _this.editor.elements[0].innerHTML;
            _this.ngOnChanges(value);
        });
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
    { type: core.Component, args: [{
                selector: 'medium-editor',
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return MediumEditorComponent; }),
                        multi: true
                    }],
                template: "<div #host class=\"{{templateClasses}}\"></div>"
            },] },
];
MediumEditorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
MediumEditorComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "placeholder": [{ type: core.Input },],
    "templateClasses": [{ type: core.Input },],
    "host": [{ type: core.ViewChild, args: ['host',] },],
};

exports.MediumEditorComponent = MediumEditorComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-meditor.umd.js.map
