import Item from "./Item";

export default class Eletronic extends Item {
  constructor(description: string, price: number) {
    super("Eletronic", description, price);
  }

  getTax(): number {
    return 0.5;
  }
}
