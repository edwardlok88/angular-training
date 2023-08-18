import { Product } from '../model/product';
import { ProductFilterPipe } from './product-filter.pipe';

fdescribe('ProductFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the input when no searchkey', () => {
    const pipe = new ProductFilterPipe();
    const input = [
      new Product(1, "P1", "PD1", "2000"),
      new Product(2, "P2", "PD2", "3000"),
      new Product(3, "P3", "PD3", "4000")
    ];
    const output = pipe.transform(input, "");
    expect(output.length).toBe(input.length);
  })

  it('should return the filtered output with searchkey', () => {
    const pipe = new ProductFilterPipe();
    const input = [
      new Product(1, "P1", "PD1", "2000"),
      new Product(2, "P2", "PD2", "3000"),
      new Product(3, "P3", "PD3", "4000")
    ];
    let output = pipe.transform(input, "1");
    expect(output.length).toBe(1);

    output = pipe.transform(input, "P");
    expect(output.length).toBe(3);

    output = pipe.transform(input, "p");
    expect(output.length).toBe(3);
  })
});