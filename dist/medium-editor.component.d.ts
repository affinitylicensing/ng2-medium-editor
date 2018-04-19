import { ElementRef, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class MediumEditorComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
    private platformId;
    options: any;
    placeholder: string;
    templateClasses: string;
    el: ElementRef;
    editor: any;
    host: any;
    propagateChange: (_: any) => void;
    constructor(el: ElementRef, platformId: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
