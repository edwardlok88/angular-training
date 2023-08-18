import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DataBindingComponent } from "./databinding.component"

fdescribe("DataBindingComponent", () => {

    let fixture!: ComponentFixture<DataBindingComponent>;
    let instance: DataBindingComponent;
    let element: any;

    beforeEach(() => {
        fixture = TestBed.createComponent(DataBindingComponent);
        instance = fixture.componentInstance;
        element = fixture.nativeElement;
    })

    it('should create the component', () => {
        expect(instance).toBeTruthy();
        expect(element).toBeTruthy();
    })

    it('should increment the count', () => {
        // fire detectChanges to get element reflected
        fixture.detectChanges();
        let content = element.querySelector("#ctr").textContent;
        expect(content).toContain(10);
        expect(instance.count).toBe(10);
        instance.inc({});
        fixture.detectChanges();
        expect(instance.count).toBe(11);
        content = element.querySelector("#ctr").textContent;
        expect(content).toContain(11);
    })
})