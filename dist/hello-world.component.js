import { Component } from '@angular/core';
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hello-world',
                    template: "<h1>Hello World</h1> ",
                    styles: ["h1 { color: tomato; } :host.blue h1 { color: cyan; } "]
                },] },
    ];
    /** @nocollapse */
    HelloWorldComponent.ctorParameters = function () { return []; };
    return HelloWorldComponent;
}());
export { HelloWorldComponent };
//# sourceMappingURL=hello-world.component.js.map