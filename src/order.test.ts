import Beer from "./Beer";
import Cigar from "./Cigar";
import Order from "./Order";
import Water from "./Water";

test("Should calculate order sub total", () => {
  const order = new Order();
  order.addItem(new Cigar("Marlboro", 10));
  order.addItem(new Beer("Itaipava", 5));
  order.addItem(new Water("Crystal 300ml", 2));
  const subtotal = order.getSubtotal();
  expect(subtotal).toBe(17);
});

test("Should calculate order taxes", () => {
  const order = new Order();
  order.addItem(new Cigar("Marlboro", 10)); // 0.2 = 2
  order.addItem(new Beer("Itaipava", 5)); // 0.1 = 0.5
  order.addItem(new Water("Crystal 300ml", 2)); // 0 = 0
  const taxes = order.getTaxes();
  expect(taxes).toBe(2.5);
});

test("Should calculate order total", () => {
  const order = new Order();
  order.addItem(new Cigar("Marlboro", 10)); // 0.2 = 2
  order.addItem(new Beer("Itaipava", 5)); // 0.1 = 0.5
  order.addItem(new Water("Crystal 300ml", 2)); // 0 = 0
  const total = order.getTotal();
  expect(total).toBe(19.5);
});
