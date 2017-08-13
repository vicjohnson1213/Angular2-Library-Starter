import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
    let fixture: ComponentFixture<HelloWorldComponent>;
    let component: HelloWorldComponent;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [HelloWorldComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HelloWorldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
