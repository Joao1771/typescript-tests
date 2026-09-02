/* Dependency Inversion Principle (Principio de Inversao de Independencia)
Modulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem depender de abstracoes
Dependa de abstracoes (protocolos), nao de implementacoes.
Abstracoes nao devem depender de detalhes. Detalhes devem depender de abstracoes.

Alto nivel: gerenciam as classes de baixo nivel
Baixo nivel: executam tarefas (os detalhes)
*/
import { Messaging } from "./services/messaging"
import { Order } from "./classes/order"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import { ShoppingCart } from "./classes/shopping-cart"
import { HalfDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount"
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer"
import { MessagingProtocol } from "./classes/interfaces/messaging-protocol"

//const halfDiscount = new HalfDiscount()
//const tenPercentDiscount = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer('Joao', 'Flavio', '111.111.111-11')
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '222222222-11')

class MessagingMock implements MessagingProtocol{
    sendMessage(msg: string): void {
        console.log('A mensagem foi enviada pelo HAMMOCK')
    }
}

const messaginMock = new MessagingMock()
const order = new Order(shoppingCart, messaginMock, persistency, enterpriseCustomer)

shoppingCart.addItem(new Product('Blusa', 59.9))
shoppingCart.addItem(new Product('Boné', 19.9))
shoppingCart.addItem(new Product('Refrigerante', 12))
shoppingCart.addItem(new Product('Pneu', 400))

console.log(shoppingCart.itens)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)