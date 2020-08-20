"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.events = exports.imageSettings = exports.keyCodes = exports.toastrConfigArr = void 0;
exports.toastrConfigArr = {
    config: toastrConfig
};
function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}
exports.keyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46
};
exports.imageSettings = {
    imageBasePath: 'content/images/photos/',
    unknownPersonImageSource: 'unknown_person.jpg'
};
exports.events = {
    controllerActivateSuccess: 'controller.activateSuccess',
    entitiesChanged: '',
    entitiesImported: '',
    hasChangesChanged: '',
    storage: {
        error: 'store.error',
        wipChanged: 'wip.changed'
    }
};
exports.config = {
    appErrorPrefix: '[CC Error] ',
    events: exports.events,
    imageSettings: exports.imageSettings,
    keyCodes: exports.keyCodes,
    version: '1.1.0'
};
