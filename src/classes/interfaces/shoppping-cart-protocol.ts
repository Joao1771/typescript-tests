import { ItensType } from "./itens";

export interface ShoppingCartProtocol {
    itens: Readonly<ItensType[]>
    addItem(item: ItensType):void 
    removeItem(index: number):void 
    total():number 
    totalWithDiscount(): number
    isEmpty(): boolean 
    clear(): void 
}