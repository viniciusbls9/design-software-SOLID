import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
  constructor(description: string, price: number) {
    super("Cigar", description, price);
  }

  getTax(): number {
    return 0.2;
  }
}
