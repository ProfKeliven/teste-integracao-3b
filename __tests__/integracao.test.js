//importar os modulos
const {addUser, getUser, deleteUser} = require('../src/users')
const {addOrder, getOrder, deleteOrder } = require('../src/orders')

//estrutura de testes
describe('Teste de integração entre usuarios e pedidos', () => {

    test('Testando a funcao adicionar usuario e pedido', () => {
        const user = {id: 1, name: "João"}
        const order = {id: 100, userId: 1, item: 'mouse'}

        addUser(user)
        addOrder(order)

        const findUser = getUser(1)
        const findOrder = getOrder(100)

        expect(findUser).toEqual(user)
        expect(findOrder).toEqual(order)
        expect(findOrder.userId).toBe(findUser.id)
    })

    test('Testando a funcao excluir usuario e pedido', () => {
        const user = {id: 2, name: "Maria"}
        const order = {id: 101, userId: 1, item: 'Caneta'}

        addUser(user)
        addOrder(order)    

        deleteOrder(101)
        deleteUser(2)

        const findUser = getUser(2)
        const findOrder = getOrder(101)

        expect(findUser).toBeUndefined()
        expect(findOrder).toBeUndefined()
    })



})