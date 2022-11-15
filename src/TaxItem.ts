import Item from "./Item";

export default abstract class TaxItem extends Item {
  constructor(category: string, description: string, price: number) {
    super(category, description, price);
  }

  calculateTaxes(): number {
    return this.price * this.getTax();
  }

  abstract getTax(): number;
}
