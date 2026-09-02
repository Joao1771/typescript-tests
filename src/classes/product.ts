import { ItensType } from "./entities/interfaces/itens";

export class Product implements ItensType {
    constructor(public name: string, public price: number) {}
}