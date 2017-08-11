import { NgModule, ModuleWithProviders } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

export { HelloWorldComponent } from './hello-world.component';

@NgModule({
    declarations: [HelloWorldComponent],
    exports: [HelloWorldComponent]
})
export class HelloWorldModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: HelloWorldModule, providers: []};
    }
}
