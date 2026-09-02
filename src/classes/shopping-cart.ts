import { Discount } from "./discount";
import { ItensType } from "./interfaces/itens"
import { ShoppingCartProtocol } from "./interfaces/shoppping-cart-protocol";


export class ShoppingCart implements ShoppingCartProtocol{
    private readonly _itens: ItensType[] = [];

    constructor(private readonly discount: Discount) {}

    addItem(item: ItensType):void {
        this._itens.push(item)
    }

    removeItem(index: number):void {
        this._itens.splice(index, 1)
    }

    total():number {
        return +this.itens.reduce((total, next) => total + next.price, 0).toFixed(2)
    }

    totalWithDiscount(): number{
        return this.discount.calculate(this.total())
    } 
    
    isEmpty(): boolean {
        return this._itens.length === 0
    }
    
    clear(): void {
        console.log('Carrinho limpo para próxima compra.')
        this._itens.length = 0
    }
    //

    get itens(): Readonly<ItensType[]>{
        return this._itens
    }
}