import { TestBed } from '@angular/core/testing';

import { GadgetsService } from './gadgets.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

fdescribe('GadgetsService', () => {
  let service: GadgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GadgetsService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GadgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the version', () => {
    expect(service.getVersion()).toContain("Gadget Service 1.0");
  });

  it('should fetch the products', (done) => {
    const controller = TestBed.inject(HttpTestingController);
    service.getProducts()
      .subscribe({
        next: (data) => {
          expect(data.length).toBe(3);
          done();
        }
      });
    controller.expectOne(environment.productsUrl).flush([
      new Product(1, "p1", "d1", "1000"),
      new Product(2, "p2", "d2", "2000"),
      new Product(3, "p3", "d3", "3000")
    ])
  });
});
