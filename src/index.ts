import { NgModule, ModuleWithProviders } from '@angular/core';

import { HelloWorldComponent } from './components/hello-world.component';
export { HelloWorldComponent } from './components/hello-world.component';

@NgModule({
    declarations: [HelloWorldComponent],
    exports: [HelloWorldComponent]
})
export class HelloWorldModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: HelloWorldModule, providers: []};
    }
}
