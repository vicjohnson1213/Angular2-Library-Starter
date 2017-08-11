import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
export { HelloWorldComponent } from './hello-world.component';
var HelloWorldModule = (function () {
    function HelloWorldModule() {
    }
    HelloWorldModule.forRoot = function () {
        return { ngModule: HelloWorldModule, providers: [] };
    };
    HelloWorldModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HelloWorldComponent],
                    exports: [HelloWorldComponent]
                },] },
    ];
    /** @nocollapse */
    HelloWorldModule.ctorParameters = function () { return []; };
    return HelloWorldModule;
}());
export { HelloWorldModule };
//# sourceMappingURL=index.js.map