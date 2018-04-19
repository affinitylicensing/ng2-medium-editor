(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('src/index')) :
	typeof define === 'function' && define.amd ? define(['exports', 'src/index'], factory) :
	(factory((global['ng2-meditor'] = {}),global.index));
}(this, (function (exports,index) { 'use strict';

exports.MediumEditorComponent = index.MediumEditorComponent;
exports.MediumEditorModule = index.MediumEditorModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-meditor.umd.js.map
