
export const toastrConfigArr = {
    config: toastrConfig
};
function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}

export const keyCodes = {
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

export const imageSettings = {
    imageBasePath: 'content/images/photos/',
    unknownPersonImageSource: 'unknown_person.jpg'
};

export const events = {
    controllerActivateSuccess: 'controller.activateSuccess',
    entitiesChanged: '',
    entitiesImported: '',
    hasChangesChanged: '',
    storage: {
        error: 'store.error',
        wipChanged: 'wip.changed'
    }
};

export const config = {
    appErrorPrefix: '[CC Error] ', //Configure the exceptionHandler decorator
    events: events,
    imageSettings: imageSettings,
    keyCodes: keyCodes,
    version: '1.1.0'
};
